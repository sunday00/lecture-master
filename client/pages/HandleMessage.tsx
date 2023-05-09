import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import { useState } from 'react'

let socket: null|Socket<DefaultEventsMap, DefaultEventsMap> = null;

export const HandleMessage = () => {
  const [connection, setConnection] = useState(false)
  const [reply, setReply] = useState('')

  function connect() {
    socket = io('http://localhost:3000/hello')

    socket.on('connect', () => {
      setConnection(true)
      console.log('connect')
    })

    socket.on('reply', (r) => {
      setReply(r)
    })

    socket.on('disconnect', () => {
      setConnection(false)
      console.log('disconnect')
    })
  }

  function emitMessage() {
    socket?.emit('message')
  }

  function disconnect() {
    socket?.disconnect()
    socket = null
  }

  return (<>
    <h1>HandleMessage</h1>

    <p>{reply}</p>

    <button onClick={connect} disabled={connection}>connect</button>
    <button onClick={emitMessage} disabled={!connection}>emitMessage</button>
    <button onClick={disconnect} disabled={!connection}>disconnect</button>
  </>)
}