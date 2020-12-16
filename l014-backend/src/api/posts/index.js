// const Router = require('koa-router');
import Router from 'koa-router';

// const postController = require('./post.controller');
import * as postController from './post.controller.js';

import checkLogin from '../../lib/checkLogin.middleware';

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
posts.post('/', checkLogin, postController.write);
posts.get('/:id', postController.getPostById, postController.read);
posts.delete(
  '/:id',
  checkLogin,
  postController.getPostById,
  postController.checkOwnPost,
  postController.remove,
);
// posts.put('/:id', postController.replace);
posts.patch(
  '/:id',
  checkLogin,
  postController.getPostById,
  postController.checkOwnPost,
  postController.update,
);

// module.exports = posts;
export default posts;
