import { RequestMethod } from '@nestjs/common'
import { RouteInfo } from '@nestjs/common/interfaces'

export default (
  path: string,
  option?: {
    version?: string
    method?: RequestMethod
  },
): RouteInfo => ({
  path: `${path}(/|.|*)?`,
  version: option?.version || '1',
  method: option?.method || RequestMethod.ALL,
})
