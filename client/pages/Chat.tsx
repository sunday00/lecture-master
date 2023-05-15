import { io, Socket } from 'socket.io-client'
import { ChangeEvent, FormEvent, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import dayjs from 'dayjs'

const socket: Socket = io('http://localhost:3000/chat', { autoConnect: false })

type socketMsg = {
  name: string
  message: string
  key?: number
  time?: string
  isJoin: boolean
}

export const Chat = () => {
  const rendered = useRef(false)
  const wrap = useRef<HTMLDivElement>(null)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [isLogon, setIsLogon] = useState(false)

  const [content, setContent]
    = useState<socketMsg[]|[]>([])

  socket.on('join', (res) => {
    handleOnJoin(res)
  })

  socket.on('broadcast', (res) => {
    handleOnBroadcastMessage(res)
  })

  socket.on('left', (res) => {
    handleOnLeft(res)
  })

  useLayoutEffect(() => {
    if (rendered.current) return
    rendered.current = true

    const name = localStorage.getItem('name')
    if (!name) return

    setName(name)
    setIsLogon(true)
    if (!socket?.connected) socket?.connect()
    socket?.emit('login', {name})
  }, [])

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (!name) return

    if (isLogon) {
      localStorage.removeItem('name')
      setName('')
      setIsLogon(false)
      socket?.disconnect()
      return
    }

    localStorage.setItem('name', name)
    setIsLogon(true)
    if (!socket?.connected) socket?.connect()
    socket?.emit('login', {name: name})
  }

  function handleOnJoin(res: socketMsg) {
    flushSync(() => {
      setContent([...content, {
        name: res.name,
        key: content.length,
        message: `${res.name} is join the chat`,
        time: dayjs().format('YY-MM-DD HH:mm:ss'),
        isJoin: true
      }])
    })

    wrap.current?.lastElementChild?.scrollIntoView()
  }

  const handleChangeInputMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    if(!message || !name || !isLogon) return

    socket.emit('message', { name, message })

    flushSync(() => {
      setContent([
        ...content, {
          name: `$me`,
          key: content.length,
          message,
          time: dayjs().format('YY-MM-DD HH:mm:ss'),
          isJoin: false
      }])
    })

    wrap.current?.lastElementChild?.scrollIntoView()

    setMessage('')
  }

  const handleOnBroadcastMessage = (res: socketMsg) => {
    flushSync(() => {
      setContent([...content, {
        name: res.name,
        key: content.length,
        message: res.message,
        time: dayjs().format('YY-MM-DD HH:mm:ss'),
        isJoin: false
      }])
    })

    wrap.current?.lastElementChild?.scrollIntoView()
  }

  const handleOnLeft = (res: socketMsg) => {
    flushSync(() => {
      setContent([...content, {
        name: res.name,
        key: content.length,
        message: `${res.name} left`,
        time: dayjs().format('YY-MM-DD HH:mm:ss'),
        isJoin: true,
      }])
    })

    wrap.current?.lastElementChild?.scrollIntoView()
  }

  return (<>
    <h1>Chat</h1>
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
      content.map((p) =>
        <p key={p.key} className={
          `message-group ${p.isJoin ? 'text-center' : (p.name === '$me' ? 'by-me' : 'other')}`
        }>
          {p.isJoin ? <>
              <span className='mr-1'>{p.message} [{p.time}]</span>
            </>
            :
            <>
              {p.name === '$me'? <span>{p.time}</span> : '' }
              {p.name !== '$me' ? <span className='name'>{p.name} : </span> : ''}
              <span className='message'>{p.message}</span>
              {p.name !== '$me' ? <span>{p.time}</span> : ''}
            </>
          }
        </p>
    )}</div>

    <div className="form-group">
      <form className='w-100 l-0 b-0 pb-0 mb-0' onSubmit={handleSend}>
        <div className='input-group flex'>
          <input type='text' className="w-5/6"
            onChange={handleChangeInputMessage}
            value={message}
          />
          <button type="submit" className="w-1/6">send</button>
        </div>
      </form>
    </div>
  </>)
}
