import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = await bcrypt.hash(
      createUserDto.password,
      await bcrypt.genSalt(),
    );

    return await this.repository.save(user);
  }

  async signIn(
    signUserDto: CreateUserDto,
  ): Promise<{ id: number; username: string }> {
    const user = await this.repository.findOneBy({
      username: signUserDto.username,
    });

    if (user && (await bcrypt.compare(signUserDto.password, user.password))) {
      return { id: user.id, username: user.username };
    } else {
      return null;
    }
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
