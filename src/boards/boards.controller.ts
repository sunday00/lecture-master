import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAll(): Board[] {
    return this.boardService.getAll();
  }

  @Post('/create')
  create(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardService.create(title, description);
  }
}
