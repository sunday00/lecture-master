const socket = io('http://localhost:4000/', { autoConnect: false })

socket.onAny(({event, ...args}) => {
    console.log(event, args)
})

const chatBody = document.querySelector('.chat-body')
const userTitle = document.querySelector('#user-title')
const loginContainer = document.querySelector('.login-container')
const userTable = document.querySelector('.users')
const usersTagline = document.querySelector('#users-tagline')
const title = document.querySelector('#active-user')
const messages = document.querySelector('.messages')
const msgDiv = document.querySelector('.msg-div')
const msgForm = document.querySelector('.msg-form')

const socketConnect = async (username, userID) => {
    socket.auth = { username, userID }
    await socket.connect()
}

async function createSession(username) {
    let options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username})
    }

    await fetch('/session', options)
        .then(res => res.json())
        .then(data => {
            socketConnect(data.username, data.userID)

            localStorage.setItem('session-username', data.username)
            localStorage.setItem('session-userID', data.userID)

            loginContainer.classList.add('hidden')
            chatBody.classList.remove('hidden')
            userTitle.innerHTML = data.username
        })
        .catch(err => { console.error(err) })
}

const loginForm = document.querySelector('.user-login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.querySelector('#username')
    createSession(username.value.toLowerCase())
    username.value = ''
})

const sessUserName = localStorage.getItem('session-username')
const sessUserID = localStorage.getItem('session-userID')

if (sessUserName && sessUserID) {
    socketConnect(sessUserName, sessUserID)

    loginContainer.classList.add('hidden')
    chatBody.classList.remove('hidden')
    userTitle.innerHTML = sessUserName
}

const setActiveUser = (element, username, userID) => {
    title.innerHTML = username
    title.setAttribute('userID', userID)

    const list = document.querySelectorAll('.socket-users')
    for(let i = 0; i < list.length; i++){
        list[i].classList.remove('table-active')
    }

    element.classList.add('table-active')

    document.querySelector('.chat-container').classList.remove('hidden')
    msgDiv.classList.remove('hidden')
    messages.classList.remove('hidden')
    messages.innerHTML = ''

    socket.emit('fetch-messages', { receiver: userID })
    const notify = document.getElementById(userID)
    notify.classList.add('hidden')
}

socket.on('users-data', ({ users }) => {
    const index = users.findIndex(user => user.userID === socket.id || user.userID === localStorage.getItem('session-userID'))
    if (index > -1) {
        users.splice(index, 1)
    }

    userTable.innerHTML = ''
    let ul = `<table>`

    for (const user of users) {
        ul += `<tr class="socket-users" onclick="setActiveUser(this, '${user.username}', '${user.userID}')">
            <td>
                ${user.username}<span class="text-danger notify hidden" style="padding: 1em; color: orange;" id="${user.userID}">!</span>
            </td>
        </tr>`
    }

    ul += `</table>`

    if(users.length > 0) {
        userTable.innerHTML = ul
        usersTagline.innerHTML = 'connected users'
    } else {
        usersTagline.innerHTML = 'no users'
    }
})

socket.on('user-away', (id) => {
    const to = title.getAttribute('userid')
    if(to === id) {
        title.innerHTML = ''
        document.querySelector('.chat-container').classList.add('hidden')
        msgDiv.classList.add('hidden')
        messages.classList.add('hidden')
    }
})

socket.on('message-to-client', ({from, message, time}) => {
    if( localStorage.getItem('session-userID') === from) return

    const receiver = title.getAttribute('userid')

    if(!receiver) {
        document.getElementById(from).classList.remove('hidden')
    } else if (receiver === from) {
        appendMessage({ message, time, sendByMe: false})
    }
})

socket.on('stored-messages', ({ messages }) => {
    if(messages.length > 0) {
        messages.forEach(msg => {
            let payload =  {
                message: msg.message,
                time: msg.time,
            }

            if(msg.from === localStorage.getItem('session-userID')) {
                appendMessage({...payload, sendByMe: true})
            } else {
                appendMessage({...payload, sendByMe: false})
            }
        })
    }
})

msgForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const to = title.getAttribute('userid')
    const time = new Date().toLocaleString('en-US', {
        hour: 'numeric', minute: 'numeric', hour12: true
    })
    const payload = {
        from: localStorage.getItem('session-userID'),
        to,
        message: document.querySelector('#message').value,
        time,
    }

    socket.emit('message-to-server', payload)

    appendMessage({ ...payload, sendByMe: true })

    document.querySelector('#message').value = ''
})

function appendMessage(options){
    let div = document.createElement('div')
    div.classList.add('message')
    div.setAttribute('style', `
        width: fit-content; 
        padding: 1em; 
        margin-bottom: 1em;
        ${options.sendByMe ? 'margin-left' : 'margin-right'}: auto;
        background-color: ${options.sendByMe ? 'gold' : 'white'};
        color: black;
        `)
    div.innerHTML = `<span style="margin-right: 2em;">${options.message}</span><span>${options.time}</span>`
    messages.append(div)
    messages.scrollTo(0, messages.scrollHeight)
}
