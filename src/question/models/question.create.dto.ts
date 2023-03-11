import { IsNotEmpty, Length } from 'class-validator';

export class QuestionCreateDto {
  @IsNotEmpty()
  @Length(3)
  question: string;
}
