import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardsStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateDto } from './dto/create.dto';
import { Result } from 'src/results/Result';
import { UpdateDto } from './dto/update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  //TODO: this is dummy. should replace with model/repository/entities
  private boards: Board[] = [];

  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  getAll(): Board[] {
    return this.boards;
  }

  async getOneById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id);

    if (!board) throw new NotFoundException(`Can't find article ${id}`);

    return board;
  }

  create(dto: CreateDto): Promise<Board> {
    return this.boardRepository.createOne(dto);
  }

  async updateOneById(id: number, dto: UpdateDto): Promise<Board> {
    const board = await this.getOneById(id);

    for (const k in dto) {
      board[k] = dto[k] ?? board[k];
    }

    await this.boardRepository.update(dto, board);

    return board;
  }

  async deleteOneById(id: number): Promise<Result> {
    const board = await this.getOneById(id);
    const result = this.boardRepository.delete(board);

    if (result) return Result.FAIL("Can't Delete this one");

    return Result.SUCCESS;
  }
}
