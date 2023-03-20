import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './models/quiz.entity';
import { QuizRepository } from './quiz.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), UserModule],
  controllers: [QuizController],
  providers: [QuizService, QuizRepository],
})
export class QuizModule {}
