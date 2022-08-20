import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardBodyTypeValidationPipe } from '../pipes/board-body-type-validation.pipe';
import { BoardStatusValidationPipe } from '../pipes/board-status-validation.pipe';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.service.getAllBoards();
  }

  @Get('/test')
  sayHello(): string {
    return this.service.sayHello();
  }

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(BoardBodyTypeValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.service.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.service.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.service.updateBoardStatusById(id, status);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id', ParseIntPipe) id: number): Promise<SimpleSuccessResponse> {
    return this.service.deleteById(id);
  }
}
