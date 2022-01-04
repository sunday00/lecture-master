import { NotFoundException } from '@nestjs/common';
import { Result } from 'src/results/Result';
import { EntityRepository, MustBeEntityError, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardsStatus } from './boards.model';
import { CreateDto } from './dto/create.dto';

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

  async deleteOneById(id: number): Promise<Result> {
    const board = await this.findOne(id);
    try {
      await this.remove(board);
    } catch (e) {
      if (e instanceof MustBeEntityError)
        return Result.FAIL("Can't Delete this one");
    }
    return Result.SUCCESS;
  }
}
