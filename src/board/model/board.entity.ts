import {
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  Property,
  Ref,
  ref,
} from '@mikro-orm/core';
import { BoardRepository } from '../board.repository';
import { User } from '../../user/model/user.entity';

@Entity({ customRepository: () => BoardRepository })
export class Board {
  [EntityRepositoryType]?: BoardRepository;

  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @Property()
  body: string;

  // @ManyToOne({ eager: true })
  @ManyToOne(() => User, { ref: true })
  author: Ref<User>;
  // author: User;

  constructor(author: User) {
    this.author = ref(author);
  }
}
