import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets'

@WebSocketGateway({ namespace: 'chat', cors: { origin: '*' } })
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!'
  }
}
