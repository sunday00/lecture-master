import { DataSource } from 'typeorm';
import { Quiz } from './models/quiz.entity';
import { Injectable } from '@nestjs/common';
import { PaginateRepository } from '../types/CommonPaginate';

@Injectable()
export class QuizRepository extends PaginateRepository<Quiz> {
  constructor(private dataSource: DataSource) {
    super(Quiz, dataSource.createEntityManager());
  }
}
