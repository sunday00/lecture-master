import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction, response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  // private logger = new Logger('HTTP');
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl: url } = req;
    const userAgent = req.get('user-agent') || '';
    res.on('close', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      this.logger.log(`${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`);
    });

    next();
  }
}
