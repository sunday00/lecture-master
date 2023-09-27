import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 7071 });

wss.on('connection', (ws) => {
    ws.send('connected')

    ws.on('message', (msg) => {
        console.log(JSON.parse(msg))
    })
})
