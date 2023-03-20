import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiTokenException extends HttpException {
  constructor() {
    super('WrongApiKey', HttpStatus.PAYMENT_REQUIRED);
  }
}
