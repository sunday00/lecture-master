import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PaginateQuery } from '../types/nest-typeorm-paginate';
import { QuestionListDto } from '../question/models/question.list.dto';

@Injectable()
export class PaginatePipe implements PipeTransform {
  transform(value: PaginateQuery, metadata: ArgumentMetadata) {
    if (metadata.metatype.name === QuestionListDto.name) {
      value.page = value.page ? parseInt(String(value.page)) : 1;
      value.limit = value.limit ? parseInt(String(value.limit)) : 10;
    }

    return value;
  }
}
