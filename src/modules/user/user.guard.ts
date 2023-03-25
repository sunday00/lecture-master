import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest()

    return this.validate(req)
  }

  private validate(_req: Request): boolean {
    return true
  }
}
