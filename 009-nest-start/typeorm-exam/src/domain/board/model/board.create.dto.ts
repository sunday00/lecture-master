import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BoardCreateDto {
  @IsString()
  @ApiProperty({ description: '내용', default: 'hello' })
  contents: string;
}
