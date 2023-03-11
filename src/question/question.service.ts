import { Injectable } from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { Question } from './models/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repository: QuestionRepository,
  ) {}

  async store(question: QuestionCreateDto): Promise<Question> {
    return await this.repository.save(question);
  }
}
