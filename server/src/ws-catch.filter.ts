import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { SocketWithAuth } from './polls/types';
import { WsException } from '@nestjs/websockets';

export class WsCatchFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost): any {
    const socket: SocketWithAuth = host.switchToWs().getClient();
    socket.emit('exception', new WsException('Oops...').getError());
  }
}
