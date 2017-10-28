import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import '../App.css';
//import * as Actions from '../actions/authActions';
import About from '../containers/About';
import Scores from '../containers/Scores';
import Game from '../containers/Game';
import Board from '../containers/Board';
import Home from './Home.js';

const App = ({ store }) => {
  const test = store;
  return (
    <div>
      <div>{console.log("App store: ")}</div>
      <div>{console.log(test)}</div>
      <Provider store={store} >
        <Router history={browserHistory}>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/scores" component={ Scores } />
          <Route path="/game" component={ Game } />
        </Router>
      </Provider>
    </div>
  );
}

export default App;