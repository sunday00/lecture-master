import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    await axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e51b1f1da29e4670b9bc61056b4a312b',
      )
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div className="App">
      <div>
        <button onClick={onClick}>Load</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        ></textarea>
      )}
    </div>
  );
}

export default App;
