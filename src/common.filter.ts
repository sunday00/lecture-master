import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class CommonFilter<T> implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: T, host: ArgumentsHost) {
    if (exception instanceof QueryFailedError) {
      this.httpAdapterHost.httpAdapter.reply(
        host.switchToHttp().getResponse(),
        {
          statusCode: 400,
          message: exception.driverError.message,
        },
        400,
      );
    }
  }
}
