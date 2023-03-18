import { Injectable } from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { Question } from './models/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { QuizRepository } from '../quiz/quiz.repository';
import { Quiz } from '../quiz/models/quiz.entity';
import { FindRelationsNotFoundError } from 'typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { PaginateQuery } from '../types/nest-typeorm-paginate';
import { QuestionListDto } from './models/question.list.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repository: QuestionRepository,
    @InjectRepository(Quiz)
    private readonly quizRepository: QuizRepository,
  ) {}

  async list(req: QuestionListDto): Promise<Pagination<Question>> {
    const { search, ...paginateQuery } = req;
    const qb = this.repository
      .createQueryBuilder('qt')
      .where(`qt.question ${search ? 'LIKE :search' : 'IS NOT NULL'}`, {
        search: `%${search}%`,
      });
    qb.orderBy('qt.id', 'DESC');

    return paginate<Question>(qb, paginateQuery as IPaginationOptions);
  }

  async store(question: QuestionCreateDto): Promise<Question> {
    const quiz = await this.quizRepository.findOneBy({ id: question.quizId });

    if (!quiz)
      throw new FindRelationsNotFoundError([
        `cant find Quiz id ${question.quizId}`,
      ]);

    let newQuestion = await this.repository.create(question);

    newQuestion.quiz = quiz;
    newQuestion = await this.repository.save(newQuestion);

    return newQuestion;
  }
}
