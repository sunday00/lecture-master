import { io } from 'socket.io-client'

export const Chat = () => {
  const socket = io('http://localhost:3000/chat')

  return (<>
    <h1>Chat</h1>

    <section>
      <div className="content"></div>
      <div className="form-group">
        <form className='fixed fixed w-100 l-0 p-4 b-0'>
          <div className='input-group flex'>
            <input type='text' className="w-5/6"/>
            <button type="submit" className="w-1/6">send</button>
          </div>
        </form>
      </div>
    </section>
  </>)
}
