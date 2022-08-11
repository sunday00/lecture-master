import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }

  @Post()
  createBoard(@Body() body: { title: string; description: string }): Board {
    return this.service.createBoard(body.title, body.description);
  }
}
