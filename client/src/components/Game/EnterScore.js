import React from 'react';
import { connect } from 'react-redux';
import { enterHighScore } from '../../actions.js';
import { bindActionCreators } from 'redux';

class EnterScore extends React.Component {
  render() {
    if (this.props.board.solved) {
      return(
        <div>
          Puzzle solved
        </div>
      )
    }
    else
      return(
        <div>
          Puzzle not solved
          {console.log(this.props)}
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({enterHighScore: enterHighScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterScore)
