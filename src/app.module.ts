import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { SampleModule } from './sample/sample.module';
import { SampleService } from './sample/sample.service';
import { DependThisModule } from './depend-this/depend-this.module';
import { DependThisService } from './depend-this/depend-this.service';

@Module({
  imports: [CatsModule, SampleModule, DependThisModule],
  controllers: [AppController],
  providers: [AppService, CatsService, SampleService, DependThisService],
})
export class AppModule {}
