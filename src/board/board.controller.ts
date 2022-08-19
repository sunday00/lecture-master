import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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

  @Post()
  @UsePipes(ValidationPipe)
  @UsePipes(BoardBodyTypeValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.service.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.service.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatusById(
    @Param('id') id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<Board> {
    return this.service.updateBoardStatusById(id, status);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: number): Promise<SimpleSuccessResponse> {
    return this.service.deleteById(id);
  }
}
