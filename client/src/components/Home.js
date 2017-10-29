import React from 'react';
import logo from '../sudoku.png';

const Home = () => {
  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Sudoku</h1>
      </div>
      <p className="App-intro">
        Click Play to get started or about to learn more about Sudoku.
      </p>
      <a href="/about">About </a>
      <a href="/game">Play </a>
      <a href="/scores">High Scores</a>
    </div>
  )
}

export default Home