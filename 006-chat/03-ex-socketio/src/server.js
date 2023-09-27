import { createServer } from 'http';
import express from 'express'
import engine from 'express-es6-template-engine'
import {configDotenv} from "dotenv";
import {Server} from "socket.io";
import {addUser, getUser, getUsersInRoom, removeUser} from "./utils/fn-users.js";
import {generateMessage} from "./utils/fn-generate-message.js";

const app = express()
app.use(express.json())

app.use(express.static('public'))
app.use('/static', express.static('public/assets'))
app.use('/node_modules', express.static('node_modules'))

app.engine('html', engine);
app.set('views', 'public/views');
app.set('view engine', 'html');

configDotenv({ path: './.env' })

app.get('/', (req, res) => {
    res.render('index.html')
})
app.get('/chat', (req, res) => {
    res.render('chat.html')
})

const server = createServer(app)

const io = new Server(server, {
    cors: { origin: '*' }
});

io.on("connection", (socket) => {
    console.log('new user connected', socket.id)

    socket.on('join', (options, cb)  => {
        const {error, user} = addUser({id: socket.id, ...options})
        if(error) return cb(error)

        socket.join(user.room)

        // cb()
        socket.emit('message', generateMessage(
            'system',
            `you are in now ${user.room} room.`
            ))
        socket.broadcast.to(user.room).emit('message', generateMessage(
            'system',
            `${user.username} comes this room.`
        ))

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        })
    })

    socket.on('sendMessage', (msg, cb) => {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', generateMessage(user.username, msg))

        cb()
    })

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id)

        const user = removeUser(socket.id)

        if(user) {
            io.to(user.room).emit('message', generateMessage('system', `${user.username} left the room`))
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            })
        }
    })
});

const port = process.env.APP_PORT
server.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
