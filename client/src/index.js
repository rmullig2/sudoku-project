import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Router, Route, browserHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store} >
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>, document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
