import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { Request } from 'express';
import * as Sentry from '@sentry/node';
import { IncomingWebhook } from '@slack/webhook';

@Injectable()
export class SentryInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const http = context.switchToHttp();
    const req = http.getRequest<Request>();
    const { url } = req;
    return next.handle().pipe(
      catchError((err) => {
        if (err.status < 500) throw err;

        Sentry.captureException(err);
        const webhook = new IncomingWebhook(process.env.SLACK_HOOK);
        webhook
          .send({
            attachments: [
              {
                text: 'nest err',
                fields: [
                  {
                    title: `${err.response?.message || err.message}`,
                    value: `${url} \n ${err.stack}`,
                    short: false,
                  },
                ],
                ts: Math.floor(new Date().getTime() / 1000).toString(),
              },
            ],
          })
          .then((r) => {
            console.log(r);
          });
        throw err;
      }),
    );
  }
}
