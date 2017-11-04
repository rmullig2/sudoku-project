import React from 'react'
import Square from '../components/Game/Square.js'
import { connect } from 'react-redux';
//import './board.css'
import RenderSquares from '../components/Game/RenderSquares.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let status = 'Game in progress';
    return (
      <div>
        <RenderSquares />
        <span>{status}</span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { board: state.board }
}

export default connect(mapStateToProps)(Board)
