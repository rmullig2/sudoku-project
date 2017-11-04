import React from 'react'
import ScoreList from '../components/Scores/ScoreList.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { FetchScores } from '../api/FetchScores.js';

class Scores extends React.Component {
  componentWillMount() {
    this.props.FetchScores();
  }
  render() {
    return(
      <div>
        <ScoreList scores={this.props.high_scores} />
        <a href="/">Home </a>
        <a href="/game">Play </a>
        <a href="/about">About </a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({FetchScores: FetchScores}, dispatch)
}
function mapStateToProps(state){
  return {high_scores: state.high_scores}
}
export default connect(mapStateToProps, mapDispatchToProps)(Scores)