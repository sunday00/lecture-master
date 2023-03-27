import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskEntity } from './model/task.entity'
import { TaskCreateDto } from './model/task.create.dto'
import { ApiTags } from '@nestjs/swagger'
import { TaskListDto } from './model/task.list.dto'

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async index(@Query() dto: TaskListDto): Promise<TaskEntity[]> {
    return this.service.list(dto)
  }

  @Get('/:id')
  async show(@Param('id') id: number): Promise<TaskEntity> {
    return this.service.show(id)
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  async store(@Body() dto: TaskCreateDto): Promise<TaskEntity> {
    return await this.service.store(dto)
  }

  @Patch('/toggle-complete/:id')
  async update(@Param('id') id: number): Promise<TaskEntity> {
    return await this.service.toggleCompleted(id)
  }
}
