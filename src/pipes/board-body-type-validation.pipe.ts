import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import {CreateBoardDto} from "../board/dtos/create-board.dto";

@Injectable()
export class BoardBodyTypeValidationPipe implements PipeTransform {
  transform(value: any, meta: ArgumentMetadata) {
    // if (value.title.includes('@'))
    //   throw new BadRequestException('title should not contains @.');

    if (meta.metatype.name === 'User') return value;

    if (typeof value.title !== 'string')
      throw new BadRequestException('title should be string');

    if (typeof value.description !== 'string')
      throw new BadRequestException('description should be string');

    return value;
  }
}
