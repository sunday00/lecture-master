import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './utils/local-auth.guard';
import { JwtAuthResponse } from './models/jwt-auth.response';
import { User } from '../user/models/user.entity';
import { JwtAuthGuard } from './utils/jwt-auth.guard';
import { AuthLoginDto } from './models/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req): Promise<any> {
    return req.user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login-local-jwt')
  async loginLocalJwt(
    @Req() req,
    @Body() _dto: AuthLoginDto,
  ): Promise<JwtAuthResponse> {
    return await this.service.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async me(@Req() req): Promise<User> {
    return await req.user;
  }
}
