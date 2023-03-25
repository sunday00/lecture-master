import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common'
import { Request, Response } from 'express'

@Catch()
export class UserExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const _req = ctx.getRequest<Request>()
    const res = ctx.getResponse<Response>()

    res.status(exception.getStatus()).json({
      message: exception.message,
      description: 'something gonna bad',
      detail: exception.getResponse(),
    })
  }
}
