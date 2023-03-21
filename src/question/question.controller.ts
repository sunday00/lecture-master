import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { QuestionService } from './question.service';
import { Question } from './models/question.entity';
import { ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { QuestionListDto } from './models/question.list.dto';
import { Permission } from '../middlewares/permission.decorator';
import { PermissionInterceptor } from '../middlewares/permission.interceptor';
import { JwtAuthGuard } from '../auth/utils/jwt-auth.guard';

@Controller('question')
@ApiTags('question')
export class QuestionController {
  constructor(private readonly service: QuestionService) {}

  @Get('/')
  async index(
    @Query() pageQuery: QuestionListDto,
  ): Promise<Pagination<Question>> {
    return await this.service.list(pageQuery);
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @Permission('admin')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(PermissionInterceptor)
  async store(@Body() question: QuestionCreateDto): Promise<Question> {
    return await this.service.store(question);
  }
}
