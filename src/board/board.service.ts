import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BoardRepository) {}

  getAllBoards(): Promise<Board[]> {
    return this.repository.find();
  }

  createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    const board: Board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;

    return this.repository.save(board);
  }

  getBoardById(id: number): Promise<Board> {
    return this.repository.findOneBy({ id }).then((board) => {
      if (!board) throw new NotFoundException();

      return board;
    });
  }

  async updateBoardStatusById(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    return await this.repository.save(board);
  }

  async deleteById(id: number): Promise<SimpleSuccessResponse> {
    const result = await this.repository.delete(id);

    if (result) throw new NotFoundException();

    return {
      success: true,
      message: 'successfully deleted',
    };
  }

  sayHello(): string {
    return this.repository.sayHello();
  }
}
