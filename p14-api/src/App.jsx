import { useState } from 'react';
import Home from '@v/Home.jsx';
import axios from "axios";
import NewsList from "@v/NewsList";

function App() {
  const [data, setData] = useState(null)
  const onClick = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f106a76326a43f8ac22286e3a2e5c8f')
      .then(res => {
        setData(res.data)
      })
  }

  return (
    <div className="App container mx-auto bg-neutral" data-theme="dracula">
      <NewsList />
    </div>
  )
}

export default App
