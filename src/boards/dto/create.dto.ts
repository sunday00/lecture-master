import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateDto {
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @MaxLength(255, {
    message: 'Do not over 255 letters',
  })
  description: string;
}
