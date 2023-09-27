import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BoardCreateDto {
  @IsString()
  @ApiProperty({ default: 'this is title', required: true, example: 'ho' })
  name: string;

  @IsString()
  @ApiProperty({ description: '내용', default: 'hello' })
  contents: string;
}
