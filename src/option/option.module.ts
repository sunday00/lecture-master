import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './models/option.entity';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import { Question } from '../question/models/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Option, Question])],
  providers: [OptionService],
  controllers: [OptionController],
})
export class OptionModule {}
