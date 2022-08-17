import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board/board.model';

@Injectable()
export class BoardStatusValidationPipe implements PipeTransform {
  transform(value: any) {
    if (typeof value !== 'string')
      throw new BadRequestException(
        `status should be string, one of ${Object.values(BoardStatus)}`,
      );

    value = value.toUpperCase();

    if (!BoardStatusValidationPipe.isStatusValid(value))
      throw new BadRequestException(
        `status should be string, one of ${Object.values(BoardStatus)}`,
      );

    return value;
  }

  private static isStatusValid(status: string): boolean {
    const values: string[] = Object.values(BoardStatus);
    return values.includes(status);
  }
}
