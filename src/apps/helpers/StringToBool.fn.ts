import { HttpException, HttpStatus } from '@nestjs/common'
import { TransformFnParams } from 'class-transformer/types/interfaces'

export default (v: TransformFnParams) => {
  if (typeof v.value === 'boolean') return v.value

  switch (v.value) {
    case 'true':
      v.value = true
      break
    case 'false':
      v.value = false
      break
    default:
      throw new HttpException(
        `property ${v.key} should true|false`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      )
  }

  return v.value
}
