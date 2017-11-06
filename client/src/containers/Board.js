import React from 'react'
import Square from '../components/Game/Square.js'
import { connect } from 'react-redux';
//import './board.css'
import RenderSquares from '../components/Game/RenderSquares.js';
import GameCheck from '../components/Game/GameCheck.js';
class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <RenderSquares />
        <GameCheck />
      </div>
    );
  }
}

function mapStateToProps(state){
  return { board: state.board }
}

export default connect(mapStateToProps)(Board)
