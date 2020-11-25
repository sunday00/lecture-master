import './App.css';
import Sassed from './components/Sassed';
import CssModuleExample from './components/CssModuleExample';
import Conditional from './components/Conditional';
import InJs from './components/InJs';
import Responsive from './components/Responsive';

function App() {
    return (
        <div className="App">
            <Sassed></Sassed>
            <CssModuleExample></CssModuleExample>
            <Conditional></Conditional>
            <InJs></InJs>
            <Responsive></Responsive>
        </div>
    );
}

export default App;
