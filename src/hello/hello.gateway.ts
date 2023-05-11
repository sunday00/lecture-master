import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'
import { Socket } from 'socket.io'

@WebSocketGateway({ namespace: 'hello', cors: { origin: '*' } })
export class HelloGateway {
  private itv = null

  @SubscribeMessage('message')
  handleMessage(client: Socket, _payload: any): void {
    // return 'Hello world!'

    let count = 0
    this.itv = setInterval(() => {
      count++
      client.emit('reply', `hello client, this is server! ${count}`)
    }, 1000)
  }

  @SubscribeMessage('disconnect')
  handleDisconnect(_: Socket) {
    console.log('disconnect from client')
    clearInterval(this.itv)
  }
}
