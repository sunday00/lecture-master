import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const jwtSecret = () => ({
  secret: process.env.JWT_SECRET,
});

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => ({
    secret: jwtSecret().secret,
    signOptions: { expiresIn: '1d' },
  }),
};
