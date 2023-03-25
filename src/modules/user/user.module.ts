import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { IndexMiddleware } from './middleware/index.middleware'
import Route from '../../apps/helpers/Route'

@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(IndexMiddleware).forRoutes(Route('user'))
  }
}
