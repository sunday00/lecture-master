import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BoardBodyTypeValidationPipe implements PipeTransform {
  transform(value: any) {
    // if (value.title.includes('@'))
    //   throw new BadRequestException('title should not contains @.');

    if (typeof value.title !== 'string')
      throw new BadRequestException('title should be string');

    if (typeof value.description !== 'string')
      throw new BadRequestException('description should be string');

    return value;
  }
}
