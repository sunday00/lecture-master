import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserResponse } from './models/user.create.dto';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/register')
  async store(@Body() dto: UserCreateDto): Promise<UserResponse> {
    return await this.service.store(dto);
  }
}
