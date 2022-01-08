import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
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

  async getAllByAuth(user: User): Promise<Board[]> {
    const q = this.createQueryBuilder('board');
    q.where('board.userId = :userId', { userId: user.id });
    return await q.getMany();
  }

  async createOne(
    { title, description }: CreateDto,
    user: User,
  ): Promise<Board> {
    const board: Board = this.create({
      title,
      description,
      status: BoardsStatus.PUBLIC,
      user: user,
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

  async deleteOneById(id: number, user: User): Promise<Result> {
    const board = await this.findOne(id, { relations: ['user'] });

    if (board.user.id === user.id) {
      const result = await this.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(
          "Can't Delete this one. Something is wrong",
        );
    } else {
      throw new UnauthorizedException('You are not owner of this article.');
    }

    return Result.SUCCESS;
  }
}
