import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Query,
  Res,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConsumes, ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { VideoService } from './video.service';
import { CreateVideoReqDto, FindVideoReqDto } from './dto/req.dto';
import { PageReqDto } from 'src/common/dto/req.dto';
import { CreateVideoResDto, FindVideoResDto } from './dto/res.dto';
import { ApiGetItemsResponse, ApiGetResponse, ApiPostResponse } from 'src/common/decorator/swagger.decorator';
import { User, UserAfterAuth } from 'src/common/decorator/user.decorator';
import { SkipThrottle, Throttle } from '@nestjs/throttler';
import { ThrottlerForProxyGuard } from '../common/guard/throttler-for-proxy.guard';
import { CreateVideoCommand } from './command/create-video.command';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindVideoQuery } from './query/find-video.query';
import { Response } from 'express';

@ApiTags('Video')
@ApiExtraModels(FindVideoReqDto, PageReqDto, CreateVideoResDto, FindVideoResDto, FindVideoResDto)
@Controller('api/videos')
export class VideoController {
  constructor(
    private readonly videoService: VideoService,
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('video'))
  @ApiPostResponse(CreateVideoResDto)
  @UseGuards(ThrottlerForProxyGuard)
  @Post()
  async upload(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'mp4' })
        .addMaxSizeValidator({ maxSize: 5 * 1024 * 1024 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
    @Body()
    createVideoReqDto: CreateVideoReqDto,
    @User() user: UserAfterAuth,
  ) {
    // return this.videoService.create();
    const { title } = createVideoReqDto;
    const { mimetype, originalname, buffer } = file;
    const ext = originalname.split('.').pop();
    const command = new CreateVideoCommand(user.id, title, mimetype, ext, buffer);

    const { id } = await this.commandBus.execute(command);
    return { id, title };
  }

  @ApiBearerAuth()
  @ApiGetItemsResponse(FindVideoResDto)
  @Get()
  async findAll(@Query() { page, size }: PageReqDto): Promise<FindVideoResDto[]> {
    // return this.videoService.findAll();
    const findVideoQuery = new FindVideoQuery(page, size);
    const videos = await this.queryBus.execute(findVideoQuery);
    return videos.map((v) => {
      return {
        id: v.id,
        title: v.title,
        user: {
          id: v.user.id,
          email: v.user.email,
        },
      };
    });
  }

  @ApiBearerAuth()
  @ApiGetResponse(FindVideoResDto)
  @Get(':id')
  @SkipThrottle()
  async findOne(@Param() { id }: FindVideoReqDto): Promise<FindVideoResDto> {
    const { title, user } = await this.videoService.findOne(id);
    return {
      id,
      title,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  @ApiBearerAuth()
  @Get(':id/download')
  @Throttle(3, 60)
  async download(@Param() { id }: FindVideoReqDto, @Res({ passthrough: true }) res: Response) {
    const { stream, mimetype, size } = await this.videoService.download(id);
    res.set({
      'Content-Length': size,
      'Content-Type': mimetype,
      'Content-Disposition': 'attachment;',
    });
    return new StreamableFile(stream);
  }
}
