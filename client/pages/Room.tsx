import React, { ChangeEvent, FormEvent, useLayoutEffect, useRef, useState } from 'react'
import { room } from '../../types/room'
import { socket } from '../types/RoomSocket.ts'
import { RoomMessage } from '../types/RoomMessage.ts'

export const Room = () => {
  const rendered = useRef(false)
  const wrap = useRef<HTMLDivElement>(null)
  const [name, setName] = useState('')
  const [isLogon, setIsLogon] = useState(false)

  const [rooms, setRooms] = useState<room[]|[]>([])

  const [roomName, setRoomName] = useState('')

  const [messages, setMessages] = useState<RoomMessage[]|[]>([])

  useLayoutEffect(() => {
    if (rendered.current) return
    rendered.current = true

    const name = localStorage.getItem('name')
    if (!name) return

    setName(name)
    setIsLogon(true)
    if (!socket?.connected) socket?.connect()

    socket?.on('roomsList', (res: room[]) => {
      setRooms(res)
    })

    socket?.on('roomMessage', (res) => {
      console.log(socket?.id, res)
    })

  }, [])

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log('set name')
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (!name) return

    console.log('processing login')

    if (isLogon) { //Logout
      localStorage.removeItem('name')
      setName('')
      setIsLogon(false)
      socket?.disconnect()
      return
    }

    console.log('store name to localstorage')

    localStorage.setItem('name', name)
    setIsLogon(true)
    if (!socket?.connected) socket?.connect()
    socket?.emit('login', {name: name})

    console.log('logged')
  }

  const handleChangeInputRoomName = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value)
  }

  const handleCreate = (e: FormEvent) => {
    e.preventDefault()
    socket?.emit('createRoom', { name: roomName, users: [name] }, (r: string) => {
      if(r) {
        setRooms([...rooms, {
          id: r,
          name: roomName,
          users: [name]
        }])
      }
    })
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>, r: room) {
    const currentMessage: RoomMessage = {
      id: r.id,
      message: e.target.value
    }

    const prevCopy = Array.from(messages)

    const prevIndex = messages.findIndex((m) => m.id === r.id)
    if(prevIndex > -1) {
      prevCopy[prevIndex] = currentMessage
    } else {
      prevCopy.push(currentMessage)
    }

    setMessages(prevCopy)
  }

  function handleMessageSubmit(e: React.FormEvent<HTMLFormElement>, r: room) {
    e.preventDefault()
    socket?.emit('send', {
      room: r,
      user: name,
      message: messages.filter(m => m.id === r.id)?.[0]?.message
    })
  }

  return (<>
    <h1>Room - list</h1>
    <div className="form-group">
      <form className='w-100' onSubmit={handleLogin}>
        <div className='input-group flex'>
          {isLogon ?
            <p className='w-5/6 text-right align-center'>{name}</p>
            : <input type='text' className='w-5/6' onChange={handleName} />}
          {isLogon ?
            <button type='submit' className='w-1/6 logout'>logout</button>
            : <button type='submit' className='w-1/6'>login</button>}
        </div>
      </form>
    </div>

    <div className="room-list grid" ref={wrap}>{
      rooms.map((r) =>
        <section key={r.id} className={`room-group room-${r.id}`}>
          <h6>{r.id}</h6>
          <h5>[ {r.name} ]</h5>

          <div className='room-chat-content'>
            {r.contents?.map(c => (
              <p>
                <span>{c.user}</span>
              </p>
            ))}
          </div>

          <div className='room-form-group'>
            <form onSubmit={(e) => handleMessageSubmit(e, r)}>
              <input type='text' onChange={(e) => handleMessageChange(e, r)}/>
              <input type='submit' value='send'/>
            </form>
          </div>
        </section>
      )}</div>

    <div className="form-group">
      <form className='w-100 l-0 b-0 pb-0 mb-0' onSubmit={handleCreate}>
        <div className='input-group flex'>
          <input type='text' className="w-5/6"
            onChange={handleChangeInputRoomName}
            value={roomName}
          />
          <button type="submit" className="w-1/6">make room</button>
        </div>
      </form>
    </div>
  </>)
}
