import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isNumber } from 'class-validator';

@Injectable()
export class BoardIdValidationPipe implements PipeTransform {
  transform(value: any /*, metadata: ArgumentMetadata*/) {
    // if (value.length !== 36)
    if (!isNumber(parseInt(value)) || value === NaN)
      throw new BadRequestException(
        "That's not id. This service using Digit Number",
      );

    return value;
  }
}
