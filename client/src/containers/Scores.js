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
    const test = [ { id: 1, name: "ray", time: 35678 }, { id: 2, name: "dvw", time: 45289 } ]
    return(
      <div>
        <p>{console.log(this.props.high_scores)}</p>
        <ScoreList scores={test} />
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