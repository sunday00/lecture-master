import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { PollsService } from './polls.service';
import { JwtService } from '@nestjs/jwt';
import { AuthPayload, SocketWithAuth } from './types';

@Injectable()
export class GatewayAuthGuard implements CanActivate {
  private readonly logger = new Logger(GatewayAuthGuard.name);

  constructor(
    private readonly pollsService: PollsService,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket: SocketWithAuth = context.switchToWs().getClient();
    const token =
      socket.handshake.auth.token || socket.handshake.headers['token'];

    if (!token) {
      this.logger.error('No auth. Invalid token.');
      throw new UnauthorizedException('No token.');
    }

    try {
      const payload = this.jwtService.verify<AuthPayload & { sub: string }>(
        token,
      );
      this.logger.debug('Validating admin using token payload', payload);

      const { userID, pollID } = payload;

      const poll = await this.pollsService.getPoll(pollID);

      if (userID !== poll.adminID)
        throw new UnauthorizedException('Admin privileges required');

      return true;
    } catch {
      throw new UnauthorizedException('Admin privileges required');
    }
  }
}
