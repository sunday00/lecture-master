// const Router = require('koa-router');
// const posts = require('./posts');
import Router from 'koa-router';
import posts from './posts';
import auths from './auths';

const api = new Router();

api.get('/test', (ctx) => {
  const { id } = ctx.query;
  ctx.body = `<h1>this page is api for ${id}</h1>`;
});

api.use('/posts', posts.routes());
api.use('/auths', auths.routes());

// module.exports = api;
export default api;
