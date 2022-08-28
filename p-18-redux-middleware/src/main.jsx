import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "@s/modules/index.js";
import loggerMiddleware from "@/lib/loggerMiddleware.js";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(loggerMiddleware)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
