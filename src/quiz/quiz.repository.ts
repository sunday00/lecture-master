import { Repository } from 'typeorm';
import { Quiz } from './models/quiz.entity';

export class QuizRepository extends Repository<Quiz> {}
