import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dtos/create-board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard({ title, description }: CreateBoardDto) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);

    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  updateBoardStatusById(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;

    return board;
  }

  deleteById(id: string): SimpleSuccessResponse {
    this.boards = this.boards.filter((board) => board.id !== id);

    return {
      success: true,
      message: 'successfully deleted',
    };
  }
}
