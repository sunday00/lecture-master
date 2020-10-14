import React, {useState} from 'react';

function App() {
  
  const [border, setBorder] = useState(1);

  function applyBorder(e, w){
    setBorder(w);
  }

  return (
    <div className="App" style={{ 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
      }}>
      <Button border={border} onThicker={applyBorder}/>
      <BButton border={1} onThicker={applyBorder}></BButton>
    </div>
  );
}

function Button (props) {

  const [color, setColor] = useState('red');

  function applyColor (e){
    setColor(color === 'red' ? 'blue' : 'red');
    props.onThicker(e, props.border + 3);
  }

  return (
    <button onClick={applyColor} style={{
      backgroundColor: color,
      padding: "10px",
      fontSize: "2rem",
      color: 'white',
      border: `${props.border}px solid orange`
    }}>LIKE</button>
  );
}

const BButton = React.memo(Button);
// React.memo 는 props가 변할때만 새로 랜더링 한다.
// 이렇게 하지 않으면 부모가 랜더링될때 자식도 항상 함께 랜더링 된다.
// 무조건 이걸 쓰라는 게 아니라, 부모가 변할 때 자식도 함께 re-레이아웃 이 필요한지 생각하며 짤 필요가 있다는 뜻.

export default App;
