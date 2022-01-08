import { Injectable, Logger } from '@nestjs/common';
import { Board } from './boards.model';
// import { v1 as uuid } from 'uuid';
import { CreateDto } from './dto/create.dto';
import { Result } from 'src/results/Result';
import { UpdateDto } from './dto/update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  // private logger = new Logger('BoardService');

  constructor(
    private logger: Logger,
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  getAll(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  getAllByAuth(user: User): Promise<Board[]> {
    // return this.boardRepository.find({ user: user });

    this.logger.verbose(`User ${user.username} trying to get all articles`);
    return this.boardRepository.getAllByAuth(user);
  }

  getOneById(id: number): Promise<Board> {
    return this.boardRepository.getOneById(id);
  }

  create(dto: CreateDto, user: User): Promise<Board> {
    return this.boardRepository.createOne(dto, user).then((board) => {
      this.logger.verbose(
        `User ${user.username} created an article ${board.id}`,
      );
      return board;
    });
  }

  updateOneById(id: number, dto: UpdateDto): Promise<Board> {
    return this.boardRepository.updateOneById(id, dto);
  }

  deleteOneById(id: number, user: User): Promise<Result> {
    return this.boardRepository.deleteOneById(id, user);
  }
}
