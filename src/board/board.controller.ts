import { Controller, Get } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }
}
