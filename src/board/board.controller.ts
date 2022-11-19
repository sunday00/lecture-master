import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardPostDto } from './model/board.post.dto';

@Controller({ path: 'board', version: '1' })
export class BoardController {
  constructor(private readonly service: BoardService) {}

  @Get('/test')
  test(): string {
    return this.service.test();
  }

  @Get('/')
  getAll() {
    return this.service.getAll();
  }

  @Post('/')
  post(@Body() boardDto: BoardPostDto) {
    return this.service.post(boardDto);
  }
}
