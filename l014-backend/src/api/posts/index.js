// const Router = require('koa-router');
import Router from 'koa-router';

// const postController = require('./post.controller');
import * as postController from './post.controller';

const posts = new Router();
// const printInfo = (ctx) => {
//   ctx.body = {
//     method: ctx.method,
//     path: ctx.path,
//     params: ctx.params,
//   };
// };

// posts.get('/', printInfo);
// posts.post('/', printInfo);
// posts.get('/:id', printInfo);
// posts.delete('/:id', printInfo);
// posts.put('/:id', printInfo);
// posts.patch('/:id', printInfo);

posts.get('/', postController.list);
posts.post('/', postController.write);
posts.get('/:id', postController.read);
posts.delete('/:id', postController.remove);
posts.put('/:id', postController.replace);
posts.patch('/:id', postController.update);

// module.exports = posts;
export default posts;
