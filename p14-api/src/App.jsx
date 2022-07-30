import {useCallback, useState} from 'react';
import NewsList from "@v/NewsList";
import CategoryNav from "@c/CategoryNav";
import { BrowserRouter } from 'react-router-dom' ;

function App() {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])

  return (
    <BrowserRouter>
      <div className="App container mx-auto bg-neutral" data-theme="pastel">
        <CategoryNav category={category} onSelect={onSelect} />
        <NewsList category={category} />
      </div>
    </BrowserRouter>
  )
}

export default App
