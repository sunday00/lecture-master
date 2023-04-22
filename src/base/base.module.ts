import { Module } from '@nestjs/common';
import { BaseController } from './base.controller';
import { BaseService } from './base.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule.register('sql')],
  controllers: [BaseController],
  providers: [BaseService],
})
export class BaseModule {}
