import { ApiProperty, PartialType } from '@nestjs/swagger';
import { PaginateQuery } from '../../types/nest-typeorm-paginate';

export class QuestionListDto extends PartialType(PaginateQuery) {
  @ApiProperty({ example: 'hello', required: false })
  search: string;
}
