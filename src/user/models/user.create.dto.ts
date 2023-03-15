import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { User } from './user.entity';

export class UserCreateDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(4)
  password: string;
}

export class UserResponse {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
