import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserResponse } from './models/user.create.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async store(dto: UserCreateDto): Promise<UserResponse> {
    const user = this.repository.create(dto);
    const newUser = await this.repository.save(user);

    return new UserResponse(newUser);
  }
}
