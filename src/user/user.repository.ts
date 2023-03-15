import { DataSource } from 'typeorm';
import { User } from './models/user.entity';
import { Injectable } from '@nestjs/common';
import { PaginateRepository } from '../types/CommonPaginate';

@Injectable()
export class UserRepository extends PaginateRepository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
