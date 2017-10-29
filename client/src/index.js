import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import getScore from './actions.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);