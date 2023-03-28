import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './modules/user/user.module'
import { TaskModule } from './modules/task/task.module'
import { DatabaseModule } from './modules/database/database.module'
import { CustomerModule } from './modules/customer/customer.module'

@Module({
  imports: [UserModule, TaskModule, DatabaseModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
