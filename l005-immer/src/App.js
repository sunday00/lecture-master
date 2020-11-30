import './App.css';
import ApplyImmer from './components/ApplyImmer';
import NoImmer from './components/NoImmer';
import TryImmer from './components/TryImmer';
import TryStateImmer from './components/TryStateImmer';
import ApplyStateImmer from './components/ApplyStateImmer';

function App() {
  return (
    <div className="App">
      <NoImmer></NoImmer>
      <TryImmer></TryImmer>
      <ApplyImmer></ApplyImmer>
      <TryStateImmer></TryStateImmer>
      <ApplyStateImmer></ApplyStateImmer>
    </div>
  );
}

export default App;
