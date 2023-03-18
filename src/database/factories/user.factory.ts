import { define } from 'typeorm-seeding';
import { User } from '../../user/models/user.entity';
import { faker } from '@faker-js/faker';

define(User, () => {
  const user = new User();
  user.name = faker.internet
    .userName()
    .replace('.', '')
    .replace('_', '')
    .concat(String(faker.datatype.number({ min: 2, max: 6 })));
  user.email = faker.internet.email();
  user.password = faker.internet.password();

  return user;
});
