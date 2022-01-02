import { Injectable } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  //TODO: this is dummy. should replace with model/repository/entities
  private boards: Board[] = [];

  getAll(): Board[] {
    return this.boards;
  }

  create(title: string, description: string): Board {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardsStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
