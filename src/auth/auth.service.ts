import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = await bcrypt.hash(
      createUserDto.password,
      await bcrypt.genSalt(),
    );

    return await this.repository.save(user);
  }

  async signIn(signUserDto: CreateUserDto): Promise<User> {
    const user = await this.repository.findOneBy({
      username: signUserDto.username,
    });

    if (user && (await bcrypt.compare(signUserDto.password, user.password))) {
      return user;
    } else {
      throw new UnauthorizedException('Not valid Login');
    }
  }
}
