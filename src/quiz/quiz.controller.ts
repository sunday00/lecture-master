import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizCreateDto } from './models/quiz.create.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly service: QuizService) {}

  @Get('/')
  index() {
    return this.service.list();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  store(@Body() quiz: QuizCreateDto) {
    return this.service.store(quiz);
  }
}
