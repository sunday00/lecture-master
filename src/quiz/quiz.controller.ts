import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizCreateDto } from './models/quiz.create.dto';
import { Quiz } from './models/quiz.entity';
import { PaginateRes } from '../types/CommonPaginate';
import { ApiTags } from '@nestjs/swagger';
import { QuizListDto } from './models/quiz.list.dto';

@Controller('quiz')
@ApiTags('quiz')
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Get('/')
  async index(
    @Query('per') per: number,
    @Query('page') page: number,
    @Query('search') search: string,
  ): Promise<PaginateRes<Quiz>> {
    return await this.service.list({ per, page, search });
  }

  @Get('/with-option')
  async withOption(
    @Query() { per, page, search }: QuizListDto,
  ): Promise<PaginateRes<Quiz>> {
    return await this.service.withOption({ per, page, search });
  }

  @Get('/:id')
  async show(@Param('id') id: number): Promise<Quiz> {
    return await this.service.getQuizById(id);
  }

  @Get('/with-option/:id')
  async showWithOption(@Param('id') id: number): Promise<Quiz> {
    return await this.service.getQuizByIdWithOption(id);
  }

  @Post('/')
  async store(@Body() quiz: QuizCreateDto): Promise<Quiz> {
    return await this.service.store(quiz);
  }
}
