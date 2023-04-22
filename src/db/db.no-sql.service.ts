import { Injectable } from '@nestjs/common';
import { DbService } from './db.service';

@Injectable()
export class DbNoSqlService extends DbService {
  getListByRequest() {
    console.log('hello no sql DB');
  }
}
