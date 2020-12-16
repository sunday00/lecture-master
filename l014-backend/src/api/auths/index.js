import Router from 'koa-router';
import * as userController from './auth.controller.js';

const users = new Router();

users.post('/register', userController.register);
users.post('/login', userController.login);
users.get('/check', userController.check);
users.post('/logout', userController.logout);

export default users;
