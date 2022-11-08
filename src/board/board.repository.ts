import { EntityRepository } from '@mikro-orm/mariadb';
import { Board } from './model/board.entity';

export class BoardRepository extends EntityRepository<Board> {}
