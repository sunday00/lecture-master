import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.createUser(createUserDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) signUserDto: CreateUserDto): Promise<User> {
    return this.service.signIn(signUserDto);
  }
}
