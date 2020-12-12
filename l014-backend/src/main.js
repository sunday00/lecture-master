require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');
// const api = require('./api');

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';

const app = new Koa();
const router = new Router();

mongoose
  .connect(process.env.M0NG0_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.info('mongoose connected');
  })
  .catch((err) => {
    console.error('mongoose connection failed', err);
  });

router.get('/', (ctx) => {
  ctx.body = 'home';
});

router.get('/about', (ctx) => {
  ctx.body = 'intro';
});

router.get('/user/:name?', (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `hello, ${name} ?` : 'not found user.';
});

router.get('/post', (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `<h1>${id}</h1>` : '<h1>this page is post</h1>';
});

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
