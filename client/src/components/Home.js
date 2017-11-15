import React from 'react';
import logo from '../sudoku.png';
import './home.css';
import { Link } from 'react-router';

const Home = () => {
  return(
    <div>
      <p id="press">Click Play to get started or about to learn more about Sudoku.</p>
      <div id="link">
        <Link to="/about">About</Link>
        <Link to="/game">Play</Link>
        <Link to="/scores">High Scores</Link>
      </div>
    </div>
  )
}

export default Home