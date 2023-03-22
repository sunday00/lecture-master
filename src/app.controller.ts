import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { UploadDto } from './models/upload.dto';
import { diskStorage } from 'multer';
import { Request } from 'express';
import { extname } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  @HttpCode(HttpStatus.CREATED)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploaded',
        filename: (
          req: Request,
          file: Express.Multer.File,
          callback: (Exception, string) => void,
        ) => {
          const uuid = Date.now() + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const originalName = file.originalname.replace(ext, '');
          callback(null, `${originalName}-${uuid}${ext}`);
        },
      }),
    }),
  )
  uploadFile(
    @Body() data: UploadDto,
    @UploadedFile(
      // new ParseFilePipe({
      //   validators: [
      //     new MaxFileSizeValidator({ maxSize: 1000 }),
      //     new FileTypeValidator({ fileType: 'image/jpeg' }),
      //   ],
      // }),
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'jpg|jpeg|png' })
        .addMaxSizeValidator({ maxSize: 1024 * 400 })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    console.log(data, file);
  }
}
