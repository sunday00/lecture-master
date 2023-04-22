import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';

@Injectable()
export class DbSqlService extends DbService {
  getListByRequest() {
    console.log('hello sqlDB');
  }
}
