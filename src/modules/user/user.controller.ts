import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserCreateDto } from './model/user.create.dto'
import { UserEntity } from './model/user.entity'
import { UserExceptionFilter } from './middleware/user.exception.filter'
import { GlobalValidationPipe } from '../../global/middleware/validation.pipe'
import { UserGuard } from './user.guard'
import { UserInterceptor } from './middleware/user.interceptor'

@Controller({ version: '1', path: 'user' })
@UseInterceptors(UserInterceptor)
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
  @UseGuards(UserGuard)
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
