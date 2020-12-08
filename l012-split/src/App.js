import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = (e) => {
    import('./resources/notify').then((res) => {
      res.default();
    });
  };
  return (
    <div className="App">
      <img src={logo} alt="logo" width="100px" onClick={onClick} />
    </div>
  );
}

export default App;
