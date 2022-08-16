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
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dtos/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.service.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.service.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.service.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatusById(
    @Param('id') id: string,
    @Body('status') status: BoardStatus,
  ): Board {
    return this.service.updateBoardStatusById(id, status);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): SimpleSuccessResponse {
    return this.service.deleteById(id);
  }
}
