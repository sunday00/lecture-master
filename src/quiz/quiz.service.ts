import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizCreateDto } from './models/quiz.create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './models/quiz.entity';
import { FindOptionsWhere } from 'typeorm';
import { Paginate, PaginateReq, PaginateRes } from '../types/CommonPaginate';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly repository: QuizRepository,
  ) {}

  async list(commonPaginate: PaginateReq): Promise<PaginateRes<Quiz>> {
    // return this.repository.find({
    //   relations: { questions: true },
    // });

    const per = commonPaginate.per || 10;
    const page = commonPaginate.page || 1;

    const [results, total] = await this.repository.findAndCount({
      take: per,
      skip: per * (page - 1),
      order: { id: 'DESC' },
      relations: { questions: true },
    });

    return new PaginateRes<Quiz>({
      results,
      total,
      current: page,
      last: Math.floor(total / per) + 1,
    });
  }

  async getQuizById(id: number): Promise<Quiz> {
    const quiz = await this.repository.findOne({
      where: { id } as FindOptionsWhere<Quiz> | FindOptionsWhere<Quiz>[],
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
