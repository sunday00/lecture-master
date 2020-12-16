import faker from 'faker';
import Post from '../models/post';
import User from '../models/user';

// dev
export default async function createBulkData(length) {
  await User.findAllUsers().then((users) => {
    const posts = [...Array(length).keys()].map((k) => {
      const tags = [];
      const tagLength = faker.random.number({ max: 4 });
      for (let i = 0; i < tagLength; i++) {
        tags.push(faker.random.word());
      }

      const randUserIdx = faker.random.number({ max: 10 }) % users.length;

      const post = {
        id: k,
        title: faker.name.title(),
        body: faker.lorem.paragraph(),
        user: users[randUserIdx],
        tags,
      };

      return post;
    });

    Post.insertMany(posts, (err, docs) => {
      if (err) console.error(err);
      // console.log(`${docs} is inserted`);
    });
  });
}
