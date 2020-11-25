import logo from './logo.svg';
import './App.css';
import EventPractice from './components/EventPractice';
import MultipleInput from './components/MultipleInput';
import GoDownButton from './components/GoDownButton';
import Clearable from './components/Clearable';
import UseReducerComponent from './components/UseReducerComponent';
import Info from './components/Info';
import Average from './components/Average';

function App() {
    return (
        <div className="App">
            <EventPractice></EventPractice>
            <MultipleInput></MultipleInput>
            <GoDownButton />
            <Clearable></Clearable>
            <UseReducerComponent></UseReducerComponent>
            <Info></Info>
            <Average></Average>
        </div>
    );
}

export default App;
