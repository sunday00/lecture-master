import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizCreateDto } from './models/quiz.create.dto';
import { QuizRepository } from './quiz.repository';
import { Quiz } from './models/quiz.entity';
import { FindOptionsWhere } from 'typeorm';
import { PaginateReq, PaginateRes } from '../types/CommonPaginate';

@Injectable()
export class QuizService {
  constructor(private readonly repository: QuizRepository) {}

  async list(req: PaginateReq): Promise<PaginateRes<Quiz>> {
    const results = await this.repository.paginateFindAndCount(
      {
        order: { id: 'DESC' },
        relations: { questions: true },
      },
      req,
    );

    return new PaginateRes<Quiz>({
      results,
      req,
    });
  }

  async withOption(req: PaginateReq): Promise<PaginateRes<Quiz>> {
    const results = await this.repository
      // .createQueryBuilder('qz')
      .createPaginateQueryBuilder('qz', req)
      // .leftJoinAndSelect(Question, 'qt', 'qz.id=qt.quiz_id')
      .leftJoinAndSelect('qz.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'ot')
      .where(...this.repository.whereLike('qz.title', req.search))
      .orderBy('qz.id', 'DESC')
      .getManyAndCount();

    return new PaginateRes<Quiz>({
      results,
      req,
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

  async getQuizByIdWithOption(id: number): Promise<Quiz> {
    return await this.repository
      .createQueryBuilder('qz')
      .leftJoinAndSelect('qz.questions', 'qt')
      .leftJoinAndSelect('qt.options', 'ot')
      .where('qz.id=:id', { id })
      .getOne();
  }

  async store(quiz: QuizCreateDto): Promise<Quiz> {
    return await this.repository.save(quiz);
    // const quizEntity = this.repository.create(quiz);
    // return this.repository.insert(quizEntity);
  }
}
