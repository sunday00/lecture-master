import { useState } from 'react';
import Home from '@v/Home.jsx';
import axios from "axios";

function App() {
  const [data, setData] = useState(null)
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        setData(res.data)
      })
  }

  return (
    <div className="App flex flex-col h-[100vh] justify-center items-center" data-theme="dracula">
      <button onClick={onClick} className="btn btn-primary mb-4">Data</button>
      <ul>
        {data && <textarea rows={7} readOnly={true} className="p-4 text-black">
          {JSON.stringify(data, null, 2)}
        </textarea>}
      </ul>
    </div>
  )
}

export default App
