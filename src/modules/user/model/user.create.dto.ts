import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class UserCreateDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  username: string
}
