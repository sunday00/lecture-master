import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizCreateDto } from './models/quiz.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './models/quiz.entity';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly repository: QuizRepository,
  ) {}

  list() {
    return this.repository.find({
      relations: { questions: true },
    });
  }

  async getQuizById(id: number): Promise<Quiz> {
    const quiz = await this.repository.findOne({
      where: ((q) => q.where('quizes.id := id', { id })) as
        | FindOptionsWhere<Quiz>
        | FindOptionsWhere<Quiz>[],
      relations: { questions: true },
    });

    if (quiz === null) {
      throw new NotFoundException();
    }

    return quiz;
  }

  async store(quiz: QuizCreateDto): Promise<Quiz> {
    return await this.repository.save(quiz);
    // const quizEntity = this.repository.create(quiz);
    // return this.repository.insert(quizEntity);
  }
}
