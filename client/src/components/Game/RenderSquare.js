import React from 'react';
import Square from './Square.js';
import { connect } from 'react-redux';

function RenderSquare({pos}) {
  console.log(this.props)
  //if (this.props.board.start_board[pos])
  //  return (<Square id={pos} value={this.props.board.start_board[pos]} />)
  //else
  //  return (<Square id={pos} value={this.props.board.current_board[pos]} onKeyPress={this.keyPress} />);
}

function mapStateToProps(state){
  return { board: state.board }
}

export default connect(mapStateToProps)(RenderSquare)
//export default RenderSquare