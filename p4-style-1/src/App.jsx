import ScssExample from './components/ScssExample';
import StyledComponent from './components/StyledComponent';
import UsingModule from './components/UsingModule';

function App() {
  return (
    <div className="App">
      <section>
        <ScssExample></ScssExample>
      </section>
      <section>
        <UsingModule></UsingModule>
      </section>
      <section>
        <StyledComponent></StyledComponent>
      </section>
    </div>
  );
}

export default App;
