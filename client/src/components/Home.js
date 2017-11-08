import React from 'react';
import logo from '../sudoku.png';
import './home.css';

const Home = () => {
  return(
    <div>
      <p id="press">Click Play to get started or about to learn more about Sudoku.</p>
      <div id="link">
        <a href="/about">About </a>
        <a href="/game">Play </a>
        <a href="/scores">High Scores</a>
      </div>
    </div>
  )
}

export default Home