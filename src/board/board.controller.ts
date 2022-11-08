import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardPostDto } from './model/board.post.dto';

@Controller({ path: 'board', version: '1' })
export class BoardController {
  constructor(private readonly service: BoardService) {}

  @Post('/')
  post(@Body() boardDto: BoardPostDto) {
    return this.service.post(boardDto);
  }
}
