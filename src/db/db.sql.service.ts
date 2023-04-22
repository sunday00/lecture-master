import { Injectable } from '@nestjs/common';
import { IDbService } from './db.service';

@Injectable()
export class DbSqlService implements IDbService {
  getListByRequest() {
    console.log('hello sqlDB');
  }
}
