import { NotFoundException } from '@nestjs/common';
import { Result } from 'src/results/Result';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardsStatus } from './boards.model';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async getOneById(id: number): Promise<Board> {
    const board = await this.findOne(id);

    if (!board) throw new NotFoundException(`Can't find article ${id}`);

    return board;
  }

  async createOne({ title, description }: CreateDto): Promise<Board> {
    const board: Board = this.create({
      title,
      description,
      status: BoardsStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }

  async updateOneById(id: number, dto: UpdateDto): Promise<Board> {
    const board = await this.getOneById(id);

    for (const k in dto) {
      board[k] = dto[k] ?? board[k];
    }

    return await this.save(board);
  }

  async deleteOneById(id: number): Promise<Result> {
    const result = await this.delete(id);

    if (result.affected === 0)
      throw new NotFoundException("Can't Delete this one");

    return Result.SUCCESS;
  }
}
