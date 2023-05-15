import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'

import { Socket } from 'socket.io'
import { room } from '../../types/room'

@WebSocketGateway({ namespace: 'room', cors: { origin: '*' } })
export class RoomGateway implements OnGatewayConnection {
  rooms: room[] = []

  @SubscribeMessage('message')
  handleMessage(_client: any, _payload: any): string {
    return 'Hello world!'
  }

  @SubscribeMessage('createRoom')
  handleCreateRoom(client: Socket, payload: room): boolean {
    client.join(client.id)
    this.rooms.push({
      name: payload.name,
      id: client.id,
      users: [payload.users[0]],
    })
    return true
  }

  handleConnection(_client: any, ..._args: any[]): void {
    //
  }
}
