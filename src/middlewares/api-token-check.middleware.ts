import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApiTokenException } from '../exceptions/api-token.exception';

@Injectable()
export class ApiTokenCheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log(req.headers);
    if (req.headers['api-key'] !== process.env.API_KEY) {
      throw new ApiTokenException();
    }

    next();
  }
}
