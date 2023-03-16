import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/models/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthResponse } from './models/jwt-auth.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    plainPassword: string,
  ): Promise<User | null> {
    const user = await this.userService.findByEmail(email).catch((err) => {
      console.log(err.message);
    });

    if (user) {
      const check = bcrypt.compareSync(plainPassword, user?.password);

      if (check) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return result as User;
      }
    }

    return null;
  }

  async generateToken({ email, name, id }): Promise<JwtAuthResponse> {
    return {
      access_token: this.jwtService.sign({ email, name, id }),
    };
  }
}
