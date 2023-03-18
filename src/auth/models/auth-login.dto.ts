import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({
    description: 'user email',
    example: 'flip@villain.com',
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'user password',
    example: '2111',
    required: true,
  })
  @IsNotEmpty()
  @Length(4)
  password: string;
}
