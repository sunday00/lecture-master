import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { SampleModule } from '../sample/sample.module';
import { SampleService } from '../sample/sample.service';
import { DependThisModule } from '../depend-this/depend-this.module';
import { DependThisService } from '../depend-this/depend-this.service';

@Module({
  imports: [SampleModule, DependThisModule],
  controllers: [CatsController],
  providers: [CatsService, SampleService, DependThisService],
})
export class CatsModule {}
