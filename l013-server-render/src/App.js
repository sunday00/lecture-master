import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Red from './components/Red';
import Blue from './components/Blue';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <hr />
        <Route path="/red" component={Red}></Route>
        <Route path="/blue" component={Blue}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
