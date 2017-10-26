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

//import registerServiceWorker from './registerServiceWorker';
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
console.log(store.getState())

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
      </Router>
    </Provider>, document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

// Change the defaultState to initialize board, start, solution, time, solved, and score