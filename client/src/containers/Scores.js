import React from 'react'
import ScoreList from '../components/Scores/ScoreList.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { FetchScores } from '../api/FetchScores.js';
//const scores = [{ id: 2, name: 'dvw', time: 45289 },  { id: 1, name: 'ray', time: 35678 } ]
//console.log(this.props.store);

let test = FetchScores();
console.log(this.props);

//var scores = []
//const url = "http://localhost:3001/api/v1/high_scores"
//fetch(url)
//  .then((resp) => resp.json())
//  .then(function(data) {
//    //console.log(data)
//    scores = [...scores, data]
//  })
//console.log(scores)

class Scores extends React.Component {
  render() {
    const test = FetchScores();
    return(
      <div>
        <p>{FetchScores()}</p>
        <p>{console.log(this.props.high_scores)}</p>
        <ScoreList scores={this.props.high_scores} />
        <a href="/">Home </a>
        <a href="/game">Play </a>
        <a href="/about">About </a>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  bindActionCreators({FetchScores: FetchScores}, dispatch)
}
function mapStateToProps(state){
  return {high_scores: state.high_scores}
}
export default connect(mapStateToProps, mapDispatchToProps)(Scores)
 
//export default Scores