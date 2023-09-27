import { Injectable, Logger } from '@nestjs/common';
import { BoardCreateDto } from './model/board.create.dto';
import { BoardUpdateDto } from './model/board.update.dto';
import { ConfigService } from '@nestjs/config';
import { FakeConfig } from '../../config/fake.config';

@Injectable()
export class BoardService {
  constructor(private readonly config: ConfigService) {}

  private readonly logger = new Logger(this.constructor.name);

  async index() {
    this.logger.log('HI');
  }

  async show(id: number) {
    console.log(this.config.get<FakeConfig>('fake').CAN_SHOOT);
    return;
  }

  async store(body: BoardCreateDto) {
    return Promise.resolve(undefined);
  }

  async update(id: number, body: BoardUpdateDto) {
    return Promise.resolve(undefined);
  }
}
