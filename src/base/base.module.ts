import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { DbSqlService } from '../db/db.sql.service';
import { BaseService } from './base.service';

@Module({
  controllers: [BaseController],
  providers: [BaseService, { provide: 'DbService', useClass: DbSqlService }],
})
export class BaseModule {}
