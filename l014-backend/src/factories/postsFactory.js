import faker from 'faker';
import Post from '../models/post';

// dev
export default function createBulkData(length) {
  const posts = [...Array(length).keys()].map((k) => {
    const tags = [];
    const tagLength = faker.random.number({ max: 4 });
    for (let i = 0; i < tagLength; i++) {
      tags.push(faker.random.word());
    }

    return {
      id: k,
      title: faker.name.title(),
      body: faker.lorem.paragraph(),
      tags,
    };
  });

  Post.insertMany(posts, (err, docs) => {
    if (err) console.error(err);
    console.log(`${docs} is inserted`);
  });
}
