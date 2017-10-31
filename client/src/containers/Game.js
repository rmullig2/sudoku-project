import React from 'react'
import Board from './Board.js'
import Status from '../components/Game/Status.js'
import { connect } from 'react-redux';
import { newGame } from '../actions.js';


class Game extends React.Component {
  render() {
    this.props.dispatch(newGame);
    console.log(this.props);
    return (
      <div className="game">
        <div className="game-board">
          <Board props={this.props}/>
        </div>
        <div className="game-status">
          <Status />
        </div>
      </div>
    );
  }
}

//export default Game

function mapStateToProps(state){
  return { current_board: state.board.current_board, start_board: state.board.start_board,
          solution_board: state.board.solution_board, start_time: state.board.start_time,
          solved: state.board.solved }
}
export default connect(mapStateToProps)(Game)

//ReactDOM.render(
//  <Game />,
//  document.getElementById('root')
//);