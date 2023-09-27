import { createServer } from 'http';
import express from 'express'
import engine from 'express-es6-template-engine'
import {configDotenv} from "dotenv";
import {Server} from "socket.io";
import mongoose from "mongoose";
import {fetchMessage, randomId, saveMessage} from "./utils/messages.js";

const app = express()
app.use(express.json())

app.use(express.static('public'))
app.use('/static', express.static('public/assets'))
app.use('/node_modules', express.static('node_modules'))

app.engine('html', engine);
app.set('views', 'public/views');
app.set('view engine', 'html');

configDotenv({ path: './.env' })

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB_BASE}?authMechanism=DEFAULT`)
    .then(() => console.log('mdb conn'))
    .catch(err => console.error(err))

app.get('/', (req, res) => {
    res.render('index.html')
})

const server = createServer(app)

const io = new Server(server, {
    cors: { origin: '*' }
});

io.use((socket, next) => {
    const username = socket.handshake.auth.username
    const userID = socket.handshake.auth.userID

    if(!username) return next(new Error('invalid username'))

    socket.username = username
    socket.userID = userID
    next()
})

let users = []
io.on("connection", (socket) => {
    console.log('new user connected', socket.id)

    const userIdx = users.findIndex(u => u.userID === socket.userID)

    if(userIdx < 0) {
        let userData = {
            username: socket.username,
            userID: socket.userID,
            realSocketId: socket.id,
        }
        users.push(userData)
    } else {
        users[userIdx].realSocketId = socket.id
    }

    io.emit('users-data', { users })

    socket.on('message-to-server', (options, cb)  => {
        const toUser = users.find(u => u.userID === options.to)
        io.to(toUser.realSocketId).emit('message-to-client', options)
        saveMessage(options)
    })

    socket.on('fetch-messages', ({receiver}) => {
        fetchMessage(io, socket.id, socket.userID, receiver)
    })

    socket.on('disconnect', () => {
        users = users.filter(u => u.realSocketId !== socket.id)
        io.emit('users-data', { users })
        io.emit('user-away', socket.userID)
    })
});

app.post('/session', (req, res) => {
    let data = {
        username: req.body.username,
        userID: randomId()
    }
    res.send(data)
})

const port = process.env.APP_PORT
server.listen(port, () => {
    console.log(`Server runs on ${port}`)
})
