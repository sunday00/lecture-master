import { ApiProperty } from '@nestjs/swagger';

export class QuizListDto {
  @ApiProperty({ example: 10, required: false })
  per: number;

  @ApiProperty({ example: 1, required: false })
  page: number;

  @ApiProperty({ example: 'hello', required: false })
  search: string;
}
