import { Module } from '@nestjs/common';
import { SampleService } from './sample.service';
import { DependThisModule } from '../depend-this/depend-this.module';
import { DependThisService } from '../depend-this/depend-this.service';

@Module({
  imports: [DependThisModule],
  providers: [SampleService, DependThisService],
})
export class SampleModule {}
