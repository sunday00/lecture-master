import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import NewsPage from './components/pages/NewsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/:category?" component={NewsPage} />;
      </div>
    </BrowserRouter>
  );
}

export default App;
