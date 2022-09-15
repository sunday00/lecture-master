import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post, Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardBodyTypeValidationPipe } from '../pipes/board-body-type-validation.pipe';
import { BoardStatusValidationPipe } from '../pipes/board-status-validation.pipe';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../auth/user.decorator';
import { User as UserEntity } from '../auth/user.entity';

@Controller({ version: '1', path: 'board' })
@UseGuards(JwtAuthGuard)
export class BoardController {
  constructor(private service: BoardService) {}

  @Get()
  getAllBoards(@Query('page') page: number): Promise<Board[]> {
    return this.service.getAllBoards(page);
  }

  @Get('/mine')
  getMine(@User() user: UserEntity): Promise<Board[]> {
    return this.service.getMine(user);
  }

  @Get('/test')
  sayHello(): string {
    return this.service.sayHello();
  }

  @Post()
  // @UsePipes(ValidationPipe)
  @UsePipes(BoardBodyTypeValidationPipe)
  async createBoard(
    @Body() createBoardDto: CreateBoardDto,
    @User() user: UserEntity,
  ): Promise<Board> {
    return await this.service.createBoard(createBoardDto, user);
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.service.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    @User() user: UserEntity,
  ): Promise<Board> {
    return this.service.updateBoardStatusById(id, status, user);
  }

  @Delete('/:id')
  deleteBoardById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SimpleSuccessResponse> {
    return this.service.deleteById(id);
  }
}
