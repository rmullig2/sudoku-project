import React, { Component } from 'react';
//import '../App.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div>
          <h1>History of Sudoku</h1>
          <p>
            The creation of Sudoku is usually credited to Howard Garns of Indiana. The early games were published
            in several puzzle magazines in the 70s and 80s. It was not until later that it became a worldwide phenomenon.
          </p>
          <p>
            When the game was introduced to Japan it soon became very popular. It was picked up by newspapers in
            the United States starting in 2004 and soon many books were published along with online versions.
          </p>
        </div>
        <div>
          <h1>Rules of Sudoku</h1>
          <p>
            The board is presented as a 9x9 grid with several values filled in. The goal is to fill in the missing
            values until the board is complete. The following restrictions apply:
          </p>
          <ul>
            <li>Each row in the grid must contain each value of 1-9 without duplicates</li>
            <li>Each column in the grid must contain each value of 1-9 without duplicates</li>
            <li>There are nine subpuzzles in the grid that must contain values 1-9 without duplicates</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About