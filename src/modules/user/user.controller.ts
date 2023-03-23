import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { UserCreateDto } from './model/user.create.dto'
import { UserEntity } from './model/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  index() {
    return this.service.list()
  }

  @Post('/')
  store(@Body() user: UserCreateDto): UserEntity {
    return this.service.store(user)
  }
}
