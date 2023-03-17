import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { jwtSecret } from './jwt-config';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly service: AuthService) {
    super({
      secretOrKey: jwtSecret().secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate({ email, name, id }): Promise<any> {
    return { email, name, id };
  }
}
