import {
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
import { v4 } from 'uuid'
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
  handleCreateRoom(client: Socket, payload: room): string {
    const id = v4()
    client.join(id)
    this.rooms.push({
      name: payload.name,
      id,
      users: [payload.users[0]],
    })
    return id
  }

  handleConnection(client: Socket): void {
    client.emit('roomsList', this.rooms)
  }
}
