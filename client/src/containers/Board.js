import React from 'react'
import Square from '../components/Game/Square.js'
import { connect } from 'react-redux';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
//    Call dispatch(newGame)
    this.state = {
      squares: Array(81).fill(""),
    };
  }
  
  keyPress = (event) => {
    console.log(event.key)
    let square = event.target.id
    const squares = this.state.squares.slice();
//    Change the following code to call a dispatch(enterValue(event.target.id, event.key)) 
    squares[square] = event.key
    console.log(squares[square])
    if (event.key > 0 && event.key < 10)
      this.setState({squares: squares})
    }
  
  renderSquare(i) {
    console.log(this.props.board)
    if (this.props.board.start_board[i]) {
      return (<td>{this.props.board.solution_board[i]}</td>)
    }
    return (
      <Square
        id={i}
        //value={this.state.squares[i]}
        value={this.props.board.current_board[i]}
        onKeyPress={this.keyPress}
      />
    );
  }

  render() {
    const status = 'Game in progress';
    //console.log("Board props");
    //console.log(this.props);
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
        </div>
        <div className="board-row">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
        </div>
        <div className="board-row">
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
        </div>
        <div className="board-row">
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
        </div>
        <div className="board-row">
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
        </div>
        <div className="board-row">
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
        </div>
        <div className="board-row">
          {this.renderSquare(63)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
        </div>
        <div className="board-row">
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(80)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { board: state.board }
}

export default connect(mapStateToProps)(Board)
//export default Board
