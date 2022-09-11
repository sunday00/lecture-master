import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
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

      return;
    }

    if (exception instanceof UnauthorizedException) {
      this.httpAdapterHost.httpAdapter.reply(
        host.switchToHttp().getResponse(),
        {
          statusCode: 401,
          message: exception.message,
        },
        401,
      );

      return;
    }

    if (exception instanceof HttpException) {
      this.httpAdapterHost.httpAdapter.reply(
        host.switchToHttp().getResponse(),
        {
          statusCode: 400,
          message: exception.message,
        },
        400,
      );

      return;
    }
  }
}
