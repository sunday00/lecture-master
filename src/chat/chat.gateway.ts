import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'
import { Socket } from 'socket.io'

type joinPerson = {
  name: string
  socketID: string
}

@WebSocketGateway({ namespace: 'chat', cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  joined: joinPerson[] = []

  @SubscribeMessage('message')
  handleMessage(
    client: Socket,
    payload: { message: string; name: string },
  ): void {
    client.broadcast.emit('broadcast', payload)
  }

  @SubscribeMessage('login')
  handleLogin(client: Socket, payload: { name: string }): void {
    this.joined.push({ name: payload.name, socketID: client.id })
    client.broadcast.emit('join', payload)
  }

  handleConnection(_client: Socket): void {
    // console.log(client.id)
  }

  handleDisconnect(client: any): void {
    const join = this.joined.filter((j) => j.socketID === client.id)
    client.broadcast.emit('left', {
      name: join[0]?.name,
      message: '',
      isJoin: true,
    })
  }
}
