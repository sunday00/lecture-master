import { DynamicModule, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DbSqlService } from './db.sql.service';
import { DbNoSqlService } from './db.no-sql.service';

@Module({
  // providers: [DbService],
})
export class DbModule {
  static register(type: string): DynamicModule {
    let db = DbSqlService;
    if (type === 'noSql') {
      db = DbNoSqlService;
    }

    return {
      module: DbModule,
      providers: [{ provide: DbService, useClass: db }],
      exports: [DbService],
    };
  }
}
