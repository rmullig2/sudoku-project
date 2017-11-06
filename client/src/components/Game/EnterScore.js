import React from 'react';
import { connect } from 'react-redux';
import { solutionCheck } from '../../actions.js';
import { bindActionCreators } from 'redux';

class EnterScore extends React.Component {
  render() {
    return(
      <div>
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
