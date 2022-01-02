import { BoardsStatus } from '../boards.model';

export class UpdateDto {
  title: string;
  description: string;
  status: BoardsStatus;
}
