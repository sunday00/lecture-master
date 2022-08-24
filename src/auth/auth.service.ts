import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly repository: UserRepository) {}

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = /* todo: hash */ createUserDto.password;

    return this.repository.save(user);
  }
}
