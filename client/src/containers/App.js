import React, { Component } from 'react';
import logo from '../logo.svg';
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
          <h2>Welcome to Sudoku</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
