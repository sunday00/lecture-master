import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common'
import { Observable, tap } from 'rxjs'

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('b...')
    const now = Date.now()

    return next
      .handle()
      .pipe(tap(() => console.log(`a... ${Date.now() - now}ms`)))
  }
}
