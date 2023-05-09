import { Module } from '@nestjs/common'
import { HelloController } from './hello.controller'
import { HelloGateway } from './hello.gateway';

@Module({
  controllers: [HelloController],
  providers: [HelloGateway],
})
export class HelloModule {}
