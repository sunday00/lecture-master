import { RecoilRoot } from 'recoil';
import TodosContainer from '@v/TodoContainer.jsx';

function App() {


  return (
    <div className="App" data-theme="dracula">
      <RecoilRoot>
        <TodosContainer />
      </RecoilRoot>
    </div>
  )
}

export default App
