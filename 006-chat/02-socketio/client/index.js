// import {io} from "socket.io-client";

const socket = io('ws://localhost:4000')

socket.on('message', (msg) => {
    const el = document.createElement('li')
    el.innerHTML = msg
    document.querySelector('ul').appendChild(el)
})

document.querySelector('form').addEventListener('submit',  (e) => {
    e.preventDefault()
    socket.emit('message', e.target[0].value)

    e.target[0].value = ''
})