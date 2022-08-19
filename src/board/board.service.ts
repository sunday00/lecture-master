import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly repository: Repository<Board>,
  ) {}

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
    await this.getBoardById(id).then(() => {
      return this.repository.delete(id);
    });

    return {
      success: true,
      message: 'successfully deleted',
    };
  }
}
