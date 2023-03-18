import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

const apiExamples = {
  uuid: {
    example: faker.datatype.uuid,
    description: 'generated identification',
  },
  name: { example: faker.internet.userName, description: 'user name' },
  email: { example: faker.internet.email, description: 'user email' },
  password: { example: () => '1111', description: 'user password' },
  get: (key) => {
    faker.seed(Date.now());
    return {
      example: apiExamples[key].example(),
      description: apiExamples[key].description,
    };
  },
};

export class UserCreateDto {
  @IsNotEmpty()
  @ApiProperty(apiExamples.get('name'))
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty(apiExamples.get('email'))
  email: string;

  @IsNotEmpty()
  @Length(4)
  @ApiProperty(apiExamples.get('password'))
  password: string;
}

export class UserResponse {
  @ApiProperty(apiExamples.get('uuid'))
  id: string;
  @ApiProperty(apiExamples.get('name'))
  name: string;
  @ApiProperty(apiExamples.get('email'))
  email: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
  }
}
