import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ApiTokenException } from '../exceptions/api-token.exception';
import { Response } from 'express';

@Catch(ApiTokenException)
export class ApiTokenHandlerFilter implements ExceptionFilter {
  catch(exception: ApiTokenException, host: ArgumentsHost): void {
    const code = exception.getStatus();

    host.switchToHttp().getResponse<Response>().status(code).json({
      code,
      success: false,
      message: exception.message,
      kor: 'api 이용권 구독 정보가 없거나 키가 만료되었습니다.',
    });
  }
}
