import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dtos/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.service.createBoard(createBoardDto);
  }
}
