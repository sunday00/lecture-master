import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  // SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Logger, UseFilters, UsePipes, ValidationPipe } from "@nestjs/common";
import { PollsService } from './polls.service';
import { Namespace } from 'socket.io';
import { SocketWithAuth } from './types';
import { WsCatchFilter } from '../ws-catch.filter';

@UsePipes(new ValidationPipe())
@UseFilters(new WsCatchFilter())
@WebSocketGateway({ namespace: 'polls' })
export class PollsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }

  private readonly logger = new Logger(PollsGateway.name);
  constructor(private readonly pollsService: PollsService) {}

  @WebSocketServer() io: Namespace;

  afterInit(server: any): any {
    this.logger.log('websocket gateway init.');
  }

  handleConnection(client: SocketWithAuth /*, ...args: any[]*/): any {
    const socket = this.io.sockets;

    this.logger.debug(
      `Socket connection with userId: ${client.userID}, pollId: ${client.pollID}, and name: ${client.name}`,
    );

    this.logger.log(`WSClient with id: ${client.id} connected.`);
    this.logger.debug(`Number of connected sockets: ${socket.size}`);

    this.io.emit('hello', { id: client.id });
  }

  handleDisconnect(client: SocketWithAuth): any {
    const socket = this.io.sockets;

    this.logger.debug(
      `Socket disconnection with userId: ${client.userID}, pollId: ${client.pollID}, and name: ${client.name}`,
    );

    this.logger.log(`WSClient with id: ${client.id} disconnected.`);
    this.logger.debug(`Number of connected sockets: ${socket.size}`);
  }

  @SubscribeMessage('test')
  async test() {
    throw new WsException({ field: 'field', message: 'sucked...' });
  }
}
