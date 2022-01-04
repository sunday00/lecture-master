import { Injectable } from '@nestjs/common';
import { Board } from './boards.model';
// import { v1 as uuid } from 'uuid';
import { CreateDto } from './dto/create.dto';
import { Result } from 'src/results/Result';
import { UpdateDto } from './dto/update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  getAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  getOneById(id: number): Promise<Board> {
    return this.boardRepository.getOneById(id);
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

  deleteOneById(id: number): Promise<Result> {
    return this.boardRepository.deleteOneById(id);
  }
}
