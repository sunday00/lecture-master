import { EntityRepository } from '@mikro-orm/mariadb';
import { User } from './model/user.entity';

export class UserRepository extends EntityRepository<User> {}
