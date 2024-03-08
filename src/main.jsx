import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';

import rootReducer from './redux/rootreducer.jsx';
import { composeWithDevTools } from '@redux-devtools/extension';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './redux/reducerfunctions/saga/rootsaga.jsx';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);
console.log(store.getState());




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      
      <App />
      </BrowserRouter>
    

    </Provider>
    
  </React.StrictMode>,
)
