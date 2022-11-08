import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardPostDto } from './model/board.post.dto';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BoardRepository) {}

  async post(boardDto: BoardPostDto) {
    const board = this.repository.create(boardDto);
    await this.repository.persistAndFlush(board);

    return board;
  }
}
