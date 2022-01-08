import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/auth/user.entity';

export const Auth = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    return ctx.switchToHttp().getRequest().user;
  },
);
