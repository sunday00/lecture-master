import { IsNotEmpty, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Matches(/^([a-zA-Z]|\d)*$/, {
    message: 'only can be eng and num',
  })
  username: string;

  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
