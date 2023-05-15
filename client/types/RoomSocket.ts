import { io, Socket } from 'socket.io-client'

class RoomSocket {
  socket: Socket|null = null

  constructor() {
    this.socket = io('http://localhost:3000/room', { autoConnect: false })
  }
}

export const socket = (new RoomSocket()).socket
