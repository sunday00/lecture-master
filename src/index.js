import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


// import Basic from './components/basic/Basic';
// ReactDOM.render(
//   <div>
//     <Basic></Basic>
//   </div>,
//   document.querySelector('#go-react2')
// );

import Clock from './components/state/Clock';

// function tick(){
  ReactDOM.render(
    <div>
      {/* <Clock date={new Date()}></Clock> */}
      <Clock />
    </div>,
    document.querySelector('#go-react2')
  )
// }

// setInterval(tick, 1000);

