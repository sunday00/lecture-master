import { Inject, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class BaseService {
  constructor(
    @Inject(DbService)
    private readonly db: DbService,
  ) {}

  list() {
    this.db.getListByRequest();
  }
}
