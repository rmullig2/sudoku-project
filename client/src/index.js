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

//import registerServiceWorker from './registerServiceWorker';
const defaultState = {
    isLoggedIn: false,
    username: '',
    password: ''
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
      <Router history={browserHistory}>
        <App />
        <Route exact path="/" component={ App } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/user" component={ User } />
      </Router>
    </Provider>, document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
