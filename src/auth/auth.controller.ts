import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User as UserEntity } from './user.entity';
import { User } from './user.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.service.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@User() user: UserEntity): Promise<{ access_token: string }> {
    return this.service.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async me(@User() user: UserEntity): Promise<UserEntity> {
    return user;
  }
}
