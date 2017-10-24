import React, { Component } from 'react';
import logo from '../sudoku.png';
import { connect } from 'react-redux';
import '../App.css';
import * as Actions from '../actions/authActions';
import Navigate from './Navigate';

class App extends Component {
  render() {
    return (
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
    );
  }
}

//export default App;
function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, Actions)(App);
