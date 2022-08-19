import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BoardRepository) {}

  getAllBoards(): Promise<Board[]> {
    return this.repository.orm.find();
  }

  createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    const board: Board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;

    return this.repository.orm.save(board);
  }

  getBoardById(id: number): Promise<Board> {
    return this.repository.orm.findOneBy({ id }).then((board) => {
      if (!board) throw new NotFoundException();

      return board;
    });
  }

  async updateBoardStatusById(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    return await this.repository.orm.save(board);
  }

  async deleteById(id: number): Promise<SimpleSuccessResponse> {
    await this.getBoardById(id).then(() => {
      return this.repository.orm.delete(id);
    });

    return {
      success: true,
      message: 'successfully deleted',
    };
  }

  sayHello(): string {
    return this.repository.sayHello();
  }
}
