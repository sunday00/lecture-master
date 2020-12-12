import Post from '../../models/post';
import mongoose from 'mongoose';

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
    const posts = await Post.find().exec();
    ctx.body = posts;
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
  console.log('??');
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
