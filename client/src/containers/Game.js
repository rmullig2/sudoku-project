import React from 'react'
import Board from './Board.js'
import Status from '../components/Game/Status.js'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-status">
          <Status />
        </div>
      </div>
    );
  }
}

export default Game

//ReactDOM.render(
//  <Game />,
//  document.getElementById('root')
//);