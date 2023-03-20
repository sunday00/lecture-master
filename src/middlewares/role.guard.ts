import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserRoleEnum } from '../types/UserRole.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { email } = context.switchToHttp().getRequest()?.user;

    const user = await this.userService.findByEmail(email);

    return user.role === UserRoleEnum.ADMIN;
  }
}
