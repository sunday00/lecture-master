import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  signup(authCredentialDto: AuthCredentialDto): Promise<User> {
    return this.userRepository.createOne(authCredentialDto);
  }

  signIn({
    username,
    password,
  }: AuthCredentialDto): Promise<{ accessToken: string }> {
    return this.userRepository
      .findOne({ username })
      .then(async (user) => {
        if (await bcrypt.compare(password, user.password)) {
          user.password = '*****';

          const payload = { user };
          return await { accessToken: this.jwtService.sign(payload) };
        }
      })
      .catch(() => {
        throw new UnauthorizedException('login failed');
      });
  }
}
