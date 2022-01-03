import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class BoardIdValidationPipe implements PipeTransform {
  transform(value: any /*, metadata: ArgumentMetadata*/) {
    if (value.length !== 36)
      throw new BadRequestException("That's not id. This service using uuid");

    return value;
  }
}
