import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UsePipes,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserCreateDto } from './model/user.create.dto'
import { UserEntity } from './model/user.entity'
import { UserExceptionFilter } from './middleware/user.exception.filter'
import { GlobalValidationPipe } from '../../global/middleware/validation.pipe'

@Controller({ version: '1', path: 'user' })
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  index() {
    return this.service.list()
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.service.show(id)
  }

  @Get('/a/b/c')
  test() {
    console.log('logic')
  }

  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new GlobalValidationPipe())
  @UseFilters(UserExceptionFilter)
  store(@Body() user: UserCreateDto): UserEntity {
    return this.service.store(user)
  }
}
