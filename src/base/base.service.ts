import { Inject, Injectable } from '@nestjs/common';
import { IDbService } from '../db/db.service';

@Injectable()
export class BaseService {
  constructor(
    @Inject('DbService')
    private readonly db: IDbService,
  ) {}

  list() {
    this.db.getListByRequest();
  }
}
