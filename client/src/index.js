import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import getScore from './actions.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, {}, applyMiddleware(thunk));
console.log("Index store: ")
console.log(store.getState())
console.log(store)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);