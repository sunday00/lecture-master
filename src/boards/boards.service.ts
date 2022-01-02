import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  //TODO: this is dummy. should replace with model/repository/entities
  private boards = [];

  getAll() {
    return this.boards;
  }
}
