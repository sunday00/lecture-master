const socket = io('ws://localhost:4000')

const query = new URLSearchParams(location.search)

socket.emit('join', {
    username: query.get('username'),
    room: query.get('roomname')
}, (err) => {
    if(err) {
        alert(err.error)
        location.href = '/'
    }
})

socket.on('roomData', ({ room, users }) => {
    const template = document.querySelector('#sidebar-template').innerHTML
    const html = Mustache.render(template, {room, users})
    document.querySelector('.side_bar').innerHTML = html
})

socket.on('message', ({ username, text, createdAt }) => {
    const template = document.querySelector('#message-template').innerHTML
    const html = Mustache.render(template, {username, text, createdAt: dayjs(createdAt).format()})

    document.querySelector('.messages').insertAdjacentHTML('beforeend', html)

    scrollToBottom()
})

function scrollToBottom() {
    document.querySelector('.messages').scrollTop = document.querySelector('.messages').scrollHeight
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const textInput = e.target.querySelector('input[type="text"]')
    const msg = textInput.value

    socket.emit('sendMessage', msg, (err) => {
        textInput.value = ''

        if(err) return console.error(err)
    })




})