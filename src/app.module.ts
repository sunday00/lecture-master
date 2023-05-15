import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { ChatModule } from './chat/chat.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [HelloModule, ChatModule, RoomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
