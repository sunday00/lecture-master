import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CustomerUpdateDto {
  @ApiProperty()
  @IsString()
  first_name?: string

  @ApiProperty()
  @IsString()
  last_name?: string

  @ApiProperty()
  @IsString()
  email?: string

  @ApiProperty()
  @IsString()
  phone?: string

  @ApiProperty()
  @IsString()
  address?: string

  @ApiProperty()
  @IsString()
  description?: string
}
