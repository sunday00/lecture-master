import { Repository } from 'typeorm';
import { Question } from './models/question.entity';

export class QuestionRepository extends Repository<Question> {}
