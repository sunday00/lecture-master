import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserResponse } from './models/user.create.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    description: 'created user',
    type: UserResponse,
  })
  async store(@Body() dto: UserCreateDto): Promise<UserResponse> {
    return await this.service.store(dto);
  }
}
