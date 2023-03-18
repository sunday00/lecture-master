import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { ApiProperty } from '@nestjs/swagger';

export class PaginateQuery implements IPaginationOptions {
  @ApiProperty({ example: 1, required: false })
  page: number;

  @ApiProperty({ example: 10, required: false })
  limit: number;
}
