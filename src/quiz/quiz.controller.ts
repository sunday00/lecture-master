import {
  Body,
  Controller,
  Get,
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

  @Post('/')
  async store(@Body() quiz: QuizCreateDto): Promise<Quiz> {
    return await this.service.store(quiz);
  }
}
