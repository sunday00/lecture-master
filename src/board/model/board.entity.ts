import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BoardRepository } from '../board.repository';

@Entity({ customRepository: () => BoardRepository })
export class Board {
  [EntityRepositoryType]?: BoardRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @Property()
  body: string;
}
