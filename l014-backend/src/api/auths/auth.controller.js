import User from '../../models/user';
// import mongoose from 'mongoose';
import Joi from '@hapi/joi';

export const register = async (ctx) => {
  const validator = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });

  const result = validator.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const { username, password } = ctx.request.body;
    const already = await User.findByUsername(username);
    if (already) {
      ctx.status = 409;
      return;
    }

    const user = new User({
      username,
    });

    await user.setPassword(password);
    await user.save();

    ctx.body = user.serialize();

    user.setTokenToCookie(ctx);
  } catch (err) {
    ctx.throw(500, err);
  }
};

export const login = async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      ctx.status = 401;
      return;
    }

    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();

    user.setTokenToCookie(ctx);
  } catch (err) {
    ctx.throw(500, err);
  }
};

export const check = async (ctx) => {
  const user = ctx.state.user;
  if (!user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  ctx.body = user;
};

export const logout = async (ctx) => {
  ctx.cookies.set('access_token');
  ctx.status = 204;
};

// export const remove = async (ctx) => {

// };
