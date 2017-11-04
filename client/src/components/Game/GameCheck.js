import React from 'react';
import { connect } from 'react-redux';
import { solutionCheck } from '../../actions.js';
import { bindActionCreators } from 'redux';


class GameCheck extends React.Component {
  onClick = () => {
    alert("Clicked")
  }

  render() {
    return(
      <div>
        {console.log(this.props)}
        <input type="button" onClick={ this.onClick } value="Check my progress"/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({solutionCheck: solutionCheck}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCheck)

//export default GameCheck