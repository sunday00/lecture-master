import { Injectable, Logger } from '@nestjs/common';
import { BoardCreateDto } from './model/board.create.dto';
import { BoardUpdateDto } from './model/board.update.dto';
import { ConfigService } from '@nestjs/config';
import { FakeConfig } from '../../config/fake.config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/model/user.entity';
import { Repository } from 'typeorm';
import { Board } from './model/board.entity';

@Injectable()
export class BoardService {
  constructor(
    private readonly config: ConfigService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  private readonly logger = new Logger(this.constructor.name);

  async index(): Promise<Board[]> {
    return await this.boardRepository.find({
      take: 20,
      skip: 0, // from dto
    });
  }

  async show(id: number) {
    console.log(this.config.get<FakeConfig>('fake').CAN_SHOOT);
    return await this.boardRepository.find({
      where: {
        id,
      },
      relations: {
        user: true,
      },
    });
  }

  async store(body: BoardCreateDto) {
    const board = this.boardRepository.create(body);
    board.userId = 3;

    return await this.boardRepository.save(board);
  }

  async update(id: number, body: BoardUpdateDto) {
    // const board = await this.boardRepository.findOne({ where: { id } });
    // for (let [column, v] of Object.entries(body)) {
    //   board[column] = v;
    // }

    return await this.boardRepository.update(id, { ...body });
  }

  async delete(id: number) {
    return this.boardRepository.delete({ id });
  }
}
