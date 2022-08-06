import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from '@s/modules/index.js'

import App from './App'
import './index.scss'

const store = configureStore({
  reducer: rootReducer,

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
