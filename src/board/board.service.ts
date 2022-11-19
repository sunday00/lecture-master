import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { BoardPostDto } from './model/board.post.dto';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BoardRepository) {}

  test(): string {
    return this.repository.test();
  }

  async getAll() {
    // eager loading
    // return this.repository.findAll({ populate: ['author'] });

    //lazy load
    const posts = await this.repository.findAll();
    for (const post of posts) {
      console.log(await post.author.load());
      console.log(post.author.unwrap().name);
    }

    return posts;
  }

  async post(boardDto: BoardPostDto) {
    const board = this.repository.create(boardDto);
    await this.repository.persistAndFlush(board);

    return board;
  }
}
