import { ApiProperty } from '@nestjs/swagger'
import { IsDefined, IsNotEmpty, IsString } from 'class-validator'

export class CustomerCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsDefined()
  first_name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  last_name: string
}
