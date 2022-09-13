import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User as UserEntity } from './user.entity';

export const User = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserEntity =>
    ctx.switchToHttp().getRequest().user,
);
