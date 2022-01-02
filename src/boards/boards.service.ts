import { Injectable } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateDto } from './dto/create.dto';
import { NotFound } from 'src/exceptions/Notfound';

@Injectable()
export class BoardsService {
  //TODO: this is dummy. should replace with model/repository/entities
  private boards: Board[] = [];

  getAll(): Board[] {
    return this.boards;
  }

  getOneById(id: string): Board {
    const board = this.boards.find((b) => b.id === id);

    if (!board) throw new NotFound();

    return board;
  }

  create({ title, description }: CreateDto): Board {
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
