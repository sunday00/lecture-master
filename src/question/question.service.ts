import { Injectable } from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { Question } from './models/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import {QuizRepository} from "../quiz/quiz.repository";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repository: QuestionRepository,
    private readonly quizRepository: QuizRepository,
  ) {}

  async store(question: QuestionCreateDto): Promise<Question> {
    const newQuestion = await this.repository.save(question);
    const quiz = await this.quizRepository.findOneBy({ id: question.quizId });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
