import { Injectable } from '@nestjs/common';
import { QuestionCreateDto } from './models/question.create.dto';
import { Question } from './models/question.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';
import { QuizRepository } from '../quiz/quiz.repository';
import { Quiz } from '../quiz/models/quiz.entity';
import { FindRelationsNotFoundError } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly repository: QuestionRepository,
    @InjectRepository(Quiz)
    private readonly quizRepository: QuizRepository,
  ) {}

  async store(question: QuestionCreateDto): Promise<Question> {
    const quiz = await this.quizRepository.findOneBy({ id: question.quizId });

    if (!quiz)
      throw new FindRelationsNotFoundError([
        `cant find Quiz id ${question.quizId}`,
      ]);

    let newQuestion = await this.repository.create(question);

    newQuestion.quiz = quiz;
    newQuestion = await this.repository.save(newQuestion);

    return newQuestion;
  }
}
