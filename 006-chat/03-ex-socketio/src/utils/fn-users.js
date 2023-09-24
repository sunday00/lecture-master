let users = []

export const addUser = ({id, username, room}) => {
    if(!username || !room) {
        return {error: 'need username, roomname both'}
    }

    username = username.trim()
    room = room.trim()

    const existing = users.find((u) => {
        return u.room === room && u.username === username
    })

    if(existing) {
        return {error: 'username duplicated'}
    }

    const user = {id, username, room}
    users.push(user)

    return {user}
}

export const getUsersInRoom = (room) => {
    room = room.trim()

    return users.filter(u => u.room === room)
}

export const getUser = (id) => {
    return users.find(u => u.id === id)
}

export const removeUser = (id) => {
    const uId = users.findIndex(u => u.id === id)
    if(uId > 0) {
        return users.splice(uId, 1)[0]
    }
}