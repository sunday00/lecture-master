import { Injectable } from '@nestjs/common';
import { IDbService } from './db.service';

@Injectable()
export class DbNoSqlService implements IDbService {
  getListByRequest() {
    console.log('hello no sql DB');
  }
}
