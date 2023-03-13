import { IsNotEmpty, Length } from 'class-validator';

export class OptionCreateDto {
  @IsNotEmpty()
  @Length(3)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
