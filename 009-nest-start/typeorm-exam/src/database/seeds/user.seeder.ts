import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../../domain/user/model/user.entity';

export default class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    console.log(dataSource.getMetadata(User));

    const repository = dataSource.getRepository(User);

    await repository.insert([
      {
        username: 'hoho',
        name: 'huhu',
        password: '1111',
      },
      {
        username: 'hehe',
        name: 'hjaja',
        password: '2111',
      },
    ]);
  }
}
