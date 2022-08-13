import { Module } from '@nestjs/common';
import { DependThisService } from './depend-this.service';

@Module({
  providers: [DependThisService],
})
export class DependThisModule {}
