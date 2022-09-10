import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req): Promise<{ access_token: string }> {
    return this.service.login(req.user);
  }
}
