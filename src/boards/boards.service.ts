import { Injectable } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateDto } from './dto/create.dto';
import { NotFound } from 'src/exceptions/Notfound';
import { Result } from 'src/results/Result';
import { UpdateDto } from './dto/update.dto';

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

  updateOneById(id: string, dto: UpdateDto): Board {
    const board = this.getOneById(id);

    for (const k in dto) {
      board[k] = dto[k] ?? board[k];
    }

    return board;
  }

  deleteOneById(id: string): Result {
    const beforeLength = this.boards.length;
    this.boards = this.boards.filter((b) => b.id !== id);

    if (beforeLength - 1 !== this.boards.length)
      return Result.FAIL("Can't Delete this one");

    return Result.SUCCESS;
  }
}
