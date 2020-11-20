import logo from './logo.svg';
import './App.css';

import Example from './components/Example';
import EnterAndExit from './components/EnterAndExit';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <section>
                <Example name="HO" price={3}></Example>
                <Example price={50}>this is child value</Example>
            </section>
            <section>
                <EnterAndExit></EnterAndExit>
            </section>
        </div>
    );
}

export default App;
