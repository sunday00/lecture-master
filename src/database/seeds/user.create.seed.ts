import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'mariadb';
import { User } from '../../user/models/user.entity';

export default class UserCreateSeed implements Seeder {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public async run(factory: Factory, _connection: Connection): Promise<void> {
    // await connection.query('TRUNCATE users');

    // await factory(User)().create();
    await factory(User)().create({
      name: 'admin',
      email: 'root@system.com',
      password: '@dmin$ecret!',
    });

    await factory(User)().createMany(10);
  }
}
