import { ChangeEvent, FormEvent, useLayoutEffect, useRef, useState } from 'react'
import { room } from '../../types/room'
import { socket } from '../types/RoomSocket.ts'
import { useLocation } from 'wouter'

export const Room = () => {
  const rendered = useRef(false)
  const wrap = useRef<HTMLDivElement>(null)
  const [name, setName] = useState('')
  const [isLogon, setIsLogon] = useState(false)

  const [roomName, setRoomName] = useState('')

  const [rooms, setRooms]
    = useState<room[]|[]>([])

  const [, setLocation] = useLocation()

  socket?.on('roomsList', (res) => {
    console.log(res)
    setRooms(res)
  })

  useLayoutEffect(() => {
    if (rendered.current) return
    rendered.current = true

    const name = localStorage.getItem('name')
    if (!name) return

    setName(name)
    setIsLogon(true)
    if (!socket?.connected) socket?.connect()
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
    socket?.emit('createRoom', { name: roomName, users: [name] }, (r: boolean) => {
      if(r) {
        setLocation(`/room-in?room=${roomName}`)
      }
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

    <div className="chat-content" ref={wrap}>{
      rooms.map((r) =>
        <p key={r.id} className={`room-group`}>

        </p>
      )}</div>

    <div className="form-group">
      <form className='w-100 l-0 b-0 pb-0 mb-0' onSubmit={handleCreate}>
        <div className='input-group flex'>
          <input type='text' className="w-5/6"
            onChange={handleChangeInputRoomName}
            value={roomName}
          />
          <button type="submit" className="w-1/6">send</button>
        </div>
      </form>
    </div>
  </>)
}
