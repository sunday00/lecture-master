import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'core-js/features/string/pad-start'; // https://github.com/zloirock/core-js
  // core-js(-pure)/es|stable|features/string/pad-start

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log( 'ENV : ', process.env.NODE_ENV );
console.log( 'ENV : ', process.env.REACT_APP_COMMON_ENV );
console.log( 'ENV : ', process.env.REACT_APP_EXAMPLE );