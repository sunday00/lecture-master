import { Body, Controller, Post } from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { QuestionService } from './question.service';
import { Question } from './models/question.entity';

@Controller('question')
export class QuestionController {
  constructor(private readonly service: QuestionService) {}

  @Post('/')
  async store(@Body() question: QuestionCreateDto): Promise<Question> {
    return await this.service.store(question);
  }
}
