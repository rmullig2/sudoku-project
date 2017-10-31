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
  return { board: state.board }
}
export default connect(mapStateToProps)(Game)

//ReactDOM.render(
//  <Game />,
//  document.getElementById('root')
//);