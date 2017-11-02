import React from 'react'
import Board from './Board.js'
import Status from '../components/Game/Status.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { NewGame } from '../api/NewGame.js';

class Game extends React.Component {
  componentWillMount() {
      this.props.NewGame();
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-status">
          <Status />
        </div>
        <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/scores">Scores </a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({NewGame: NewGame}, dispatch)
}

function mapStateToProps(state){
  return { board: state.board }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game)
