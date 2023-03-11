import { Injectable } from '@nestjs/common';
import { QuizCreateDto } from './models/quiz.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './models/quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly repository: QuizRepository,
  ) {}

  list() {
    return [1, 2, 3];
  }

  async store(quiz: QuizCreateDto): Promise<Quiz> {
    return await this.repository.save(quiz);
    // const quizEntity = this.repository.create(quiz);
    // return this.repository.insert(quizEntity);
  }
}
