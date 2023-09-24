import { ExecutionContext, Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from 'src/common/decorator/public.decorator';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserRoleEnum } from '../user/eums/user.role.enum';
import { ROLES_KEY } from '../common/decorator/role.decorator';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @Inject(Logger) private readonly logger: LoggerService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const http = context.switchToHttp();
    const { url, headers } = http.getRequest<Request>();

    const token = /Bearer\s(.+)/.exec(headers['authorization'])[1];
    const decoded = this.jwtService.decode(token);

    if (url !== '/api/auth/refresh' && decoded['tokenType'] === 'refresh') {
      this.logger.error('access token needed');
      throw new Error('access token needed');
    }

    const isRequireRole = this.reflector.getAllAndOverride<UserRoleEnum[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isRequireRole?.includes(UserRoleEnum.Admin)) {
      const userId = decoded['sub'];
      return this.userService.checkUserIsAdmin(userId).then((isAdmin) => isAdmin);
    }

    return super.canActivate(context);
  }
}
