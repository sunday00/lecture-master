import Post from '../../models/post';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;
export const checkObjectId = (ctx, next) => {
  const id = ctx.params.id;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

export const write = async (ctx) => {
  const validator = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
  });

  const result = validator.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (err) {
    ctx.throw(500, e);
  }
};

export const list = async (ctx) => {
  try {
    const page = parseInt(ctx.query.page || '1', 10);
    if (page < 1) {
      ctx.status = 400;
      return;
    }

    const posts = await Post.find()
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();

    const totalCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(totalCount / 10));

    // ctx.body = posts;
    ctx.body = posts.map((p) => {
      // const post = p.toJSON();
      return {
        ...p,
        body: p.body.length < 100 ? p.body : `${p.body.slice(0, 100)}...`,
      };
    });
  } catch (err) {
    ctx.throw(500, e);
  }
};

export const read = async (ctx) => {
  try {
    const post = await Post.findById(ctx.params.id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (err) {
    ctx.throw(500, err);
  }
};

export const update = async (ctx) => {
  const validator = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  const result = validator.validate(ctx.request.body);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(ctx.params.id, ctx.request.body, {
      new: true,
    }).exec();
    console.log(post);
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (err) {
    ctx.throw(500, err);
  }
};

export const remove = async (ctx) => {
  try {
    const post = await Post.findByIdAndRemove(ctx.params.id).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.status = 204;
  } catch (err) {
    ctx.throw(500, err);
  }
};
