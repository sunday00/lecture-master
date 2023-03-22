import { Injectable, NotFoundException } from '@nestjs/common';
import { UserCreateDto, UserResponse } from './models/user.create.dto';
import { UserRepository } from './user.repository';
import { User } from './models/user.entity';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class UserService {
  constructor(
    private readonly repository: UserRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async store(dto: UserCreateDto): Promise<UserResponse> {
    const user = this.repository.create(dto);
    const newUser = await this.repository.save(user);

    this.eventEmitter.emit('user.registered', newUser);

    return new UserResponse(newUser);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });

    if (!user) throw new NotFoundException();

    return user;
  }

  @OnEvent('user.registered')
  handleUserRegistered(payload: User): void {
    console.log('mail to : ' + payload.email);
  }
}
