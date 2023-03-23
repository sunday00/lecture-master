import { ApiProperty } from '@nestjs/swagger'

export class UserCreateDto {
  @ApiProperty()
  email: string

  @ApiProperty()
  username: string
}
