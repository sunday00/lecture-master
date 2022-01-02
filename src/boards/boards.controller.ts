import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateDto } from './dto/create.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAll(): Board[] {
    return this.boardService.getAll();
  }

  @Post('/create')
  create(@Body() CreateDto: CreateDto): Board {
    return this.boardService.create(CreateDto);
  }
}
