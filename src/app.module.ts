import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { TaskModule } from './modules/task/task.module'

@Module({
  imports: [UserModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
