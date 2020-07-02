import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';

window.axios = axios;

ReactDOM.render(
  <App />,
  document.querySelector('#go-react')
)
