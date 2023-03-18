import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthStrategy } from './utils/local-auth.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../configs/jwt-config';
import { JwtAuthStrategy } from './utils/jwt-auth.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule.registerAsync(jwtConfig)],
  controllers: [AuthController],
  providers: [AuthService, LocalAuthStrategy, JwtAuthStrategy],
})
export class AuthModule {}
