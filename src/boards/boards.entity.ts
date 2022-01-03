import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardsStatus } from './boards.model';

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardsStatus;
}
