import jwt from 'jsonwebtoken';
import User from '../models/user';

const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next();

  try {
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { _id, username, exp } = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id,
      username,
    };

    const now = Math.floor(Date.now() / 1000);
    if (exp - now < 3600 * 24 * 3.5) {
      const user = await User.findById(_id);
      user.setTokenToCookie(ctx);
    }

    return next();
  } catch (err) {
    console.error(err);
    return next();
  }
};

export default jwtMiddleware;
