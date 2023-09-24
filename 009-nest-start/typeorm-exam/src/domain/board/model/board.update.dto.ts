// import { IsOptional, IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';
//
// export class BoardUpdateDto {
//   @IsString()
//   @IsOptional()
//   @ApiProperty({ default: 'this is title' })
//   name: string;
//
//   @IsString()
//   @IsOptional()
//   @ApiProperty({ description: '내용', default: 'hello' })
//   contents: string;
// }

import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { BoardCreateDto } from './board.create.dto';

// export class BoardUpdateDto extends PartialType(BoardCreateDto) {} // duplicate but optional
// export class BoardUpdateDto extends PickType(BoardCreateDto, ['name']) {} // only name
export class BoardUpdateDto extends OmitType(BoardCreateDto, []) {} // without name
