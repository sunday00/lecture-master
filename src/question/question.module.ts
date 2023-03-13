import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './models/question.entity';
import { Quiz } from '../quiz/models/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Quiz])],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
