import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { UserRoleEnum } from '../types/UserRole.enum';

@Injectable()
export class PermissionInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const role = this.reflector.get<string[]>(
      'permission',
      context.getHandler(),
    );

    if (
      role.includes(UserRoleEnum.ADMIN) &&
      !context.switchToHttp().getRequest().user.email.startsWith('admin')
    )
      throw new ForbiddenException({
        message: 'Forbidden',
        kor: '최고관리자가 아닙니다.',
      });

    return next.handle();
  }
}
