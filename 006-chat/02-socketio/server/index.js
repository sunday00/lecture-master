import { createServer } from 'http';
import { Server } from "socket.io";

const httpServer = createServer()
const io = new Server(httpServer, {
    cors: { origin: '*' }
});

io.on("connection", (socket) => {
    console.log('new user connected')

    socket.on('message', (msg) => {
        io.emit('message', `${socket.id} said ${msg}`)
    })
});

httpServer.listen(4000);