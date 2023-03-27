import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean } from 'class-validator'
import { Transform } from 'class-transformer'
import StringToBoolFn from '../../../apps/helpers/StringToBool.fn'

export class TaskListDto {
  @ApiProperty({ required: false })
  @IsBoolean()
  @Transform(StringToBoolFn)
  filter?: boolean
}
