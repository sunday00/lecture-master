import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizCreateDto } from './models/quiz.create.dto';
import { Quiz } from './models/quiz.entity';
import { PaginateRes } from '../types/CommonPaginate';

@Controller('quiz')
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

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.service.getQuizById(id);
  }

  @Post('/')
  async store(@Body() quiz: QuizCreateDto): Promise<Quiz> {
    return await this.service.store(quiz);
  }
}
