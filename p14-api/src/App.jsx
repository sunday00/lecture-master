 import {BrowserRouter, Routes, Route} from 'react-router-dom' ;
import NewsPage from "@v/NewsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App container mx-auto bg-neutral" data-theme="city">
        <Routes>
          <Route path="/" exact element={<NewsPage />} />
          <Route path="/:category" element={<NewsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
