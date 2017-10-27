import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import getScore from './actions.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

//import registerServiceWorker from './registerServiceWorker';
//const defaultState = {
    //high_scores: [],
    //current_board: [],
    //solution_board: [],
    //start_board: [],
    //solved: false,
    //start_time: null
//};

//store.dispatch(getScore)
let store = createStore(rootReducer, {}, applyMiddleware(thunk));
console.log(store.getState())
console.log(store)

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// Change the defaultState to initialize board, start, solution, time, solved, and score