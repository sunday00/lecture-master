import './App.css';
import ColorBox from './components/ColorBox';
import ColorBox2 from './components/ColorBox2';
import ColorBox3 from './components/ColorBox3';

import { ColorProvider, ColorConsumer } from './context/UpdatableColor';
import ColorSelector from './components/ColorSelector';

function App() {
  return (
    <div className="App">
      <ColorBox></ColorBox>
      <ColorBox2></ColorBox2>
      <ColorProvider color="lightyellow" subColor="indigo">
        <div>
          <ColorSelector></ColorSelector>
          <ColorBox3></ColorBox3>
        </div>
      </ColorProvider>
    </div>
  );
}

export default App;
