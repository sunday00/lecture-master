import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class CatcherFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
    });
  }
}
