import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizCreateDto } from './models/quiz.create.dto';
import { Quiz } from './models/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Get('/')
  index() {
    return this.service.list();
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
