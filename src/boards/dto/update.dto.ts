import { IsEnum, IsOptional, MaxLength } from 'class-validator';
import { BoardsStatus } from 'src/boards/boards.model';

export class UpdateDto {
  @IsOptional()
  @MaxLength(255)
  title: string;

  @IsOptional()
  @MaxLength(255)
  description: string;

  @IsOptional()
  @IsEnum(BoardsStatus, {
    message: 'status can be only PRIVATE or PUBLIC',
  })
  status: BoardsStatus;
}
