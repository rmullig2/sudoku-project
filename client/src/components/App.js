import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import logo from '../sudoku.png';
import { connect } from 'react-redux';
import '../App.css';
//import * as Actions from '../actions/authActions';
import About from '../containers/About';
import Scores from '../containers/Scores';
import Game from '../containers/Game';
import Board from '../containers/Board';

const App = ({ store }) => {
  return (
    <div>
      <Provider store={store} >
        <div>
          <div><About /></div>
          <div><Scores /></div>
          <div><Game /></div>
          <div><Board /></div>
        </div>
      </Provider>
      <Router history={browserHistory}>
        <Route exact path="/" component={ App } />
        <Route path="/about" component={ About } />
        <Route path="/scores" component={ Scores } />
        <Route path="/game" component={ Game } />
      </Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Sudoku</h1>
        </div>
        <p className="App-intro">
          Click new game to get started or about to learn more about Sudoku.
        </p>
        <a href="/about">About </a>
        <a href="/scores">High Scores</a>
      </div>
    </div>
  );
}

//export default App;
export default connect(mapStateToProps)(App)
//function mapStateToProps(state) {
//    return {
//        authenticated: state.auth.authenticated
//    }
//}
//
//export default connect(mapStateToProps, Actions)(App);
