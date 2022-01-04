import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class BoardIdValidationPipe implements PipeTransform {
  transform(value: any /*, metadata: ArgumentMetadata*/) {
    // if (value.length !== 36)
    if (!isNumber(parseInt(value)))
      throw new BadRequestException("That's not id. This service using uuid");

    return value;
  }
}
