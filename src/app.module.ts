import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [HelloModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
