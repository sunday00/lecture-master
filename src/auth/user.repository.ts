import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createOne({ username, password }: AuthCredentialDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPw = await bcrypt.hash(password, salt);

    const user: User = this.create({
      username,
      password: hashedPw,
    });

    await this.save(user).catch((err) => {
      if (err.code === '23505') {
        throw new ConflictException(
          'Sorry, This username is already registered.',
        );
      } else {
        console.error(err);
        throw new InternalServerErrorException();
      }
    });

    user.password = '*****';
    return user;
  }
}
