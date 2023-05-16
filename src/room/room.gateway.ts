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

  @SubscribeMessage('send')
  handleSend(
    client: Socket,
    payload: { room: room; user: string; message: string },
  ) {
    const currentRoomIndex = this.rooms.findIndex(
      (r) => r.id === payload.room.id,
    )

    // should check room exists

    const isUser =
      this.rooms[currentRoomIndex].users.findIndex((u) => u === payload.user) >
      -1

    if (!isUser) {
      client.join(payload.room.id)
      this.rooms[currentRoomIndex].users.push(payload.user)
    }

    client.to(payload.room.id).emit('roomMessage', payload)
    //NO.
    // room is not using this.
    // room 은 진짜 무슨 방처럼 같은 방에 join 한 사람들끼리 채팅하게 되는게 아니고,
    // 그 아이디의 소켓 유저한테만 보내게 된다.
    // 따라서 양방향 소통을 하려면,
    //// A -> join(A)
    //// B -> join(A)
    //// C -> join(A)
    //// 순으로 들어와도, B 와 C 가 A 한테 보낼 수 있을 뿐,
    //// A 가 B 와 C 에게 소통하려면 B, C 모두에 다시 JOIN 해야 한다.

    // 쉽게 말하면, room 은 하나의 소켓에 다들 모여 있는게 아니고,
    // 각자 소켓은 가지고, 특정 소켓에 join 해서 emit 하고, 지 소켓으로 돌아온다.
  }
}
