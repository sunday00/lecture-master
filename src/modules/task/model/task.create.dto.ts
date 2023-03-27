import { IsDefined, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class TaskCreateDto {
  @ApiProperty({ default: '' })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string
}
