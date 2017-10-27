import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import About from './containers/About';
import Scores from './containers/Scores';
import Game from './containers/Game';
import getScore from './actions.js';

//import registerServiceWorker from './registerServiceWorker';
const defaultState = {
    //high_scores: [],
    //current_board: [],
    //solution_board: [],
    //start_board: [],
    //solved: false,
    //start_time: null
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
//store.dispatch(getScore)
console.log("Store: " + store.getState())

ReactDOM.render(
    <Provider store={store} >
      <Router history={browserHistory}>
        <App />
        <Route exact path="/" component={ App } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/user" component={ User } />
        <Route path="/about" component={ About } />
        <Route path="/scores" component={ Scores } />
        <Route path="/game" component={ Game } />
      </Router>
    </Provider>, document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// Change the defaultState to initialize board, start, solution, time, solved, and score