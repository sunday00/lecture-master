import {
  Body,
  Controller,
  Delete,
  Get,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BoardService } from './board.service';
import { raw } from 'express';
import { BoardCreateDto } from './model/board.create.dto';
import { BoardUpdateDto } from './model/board.update.dto';
import { Board } from './model/board.entity';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly service: BoardService) {}

  @Get('/')
  @ApiOperation({ summary: 'show all articles' })
  @ApiResponse({ description: 'show all articles' })
  async index(): Promise<Board[]> {
    return await this.service.index();
  }

  @Get('/:id')
  async show(@Ip() ip: string, @Param('id', ParseIntPipe) id: number) {
    console.log(ip);
    return await this.service.show(id);
  }

  @Post('/')
  async store(@Body(new ValidationPipe()) body: BoardCreateDto) {
    return await this.service.store(body);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) body: BoardUpdateDto,
  ) {
    return await this.service.update(id, body);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.service.delete(id);
  }
}
