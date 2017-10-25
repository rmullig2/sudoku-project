import React from 'react'
import ScoreList from '../components/Scores/ScoreList.js'

//const scores = [{ id: 2, name: 'dvw', time: 45289 },  { id: 1, name: 'ray', time: 35678 } ]
var scores = []
const url = "http://localhost:3000/api/v1/high_scores"
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data)
    scores.concat(data)
  })
console.log(scores)

class Scores extends React.Component {
  render() {
    return(
      <div>
        <ScoreList scores={scores} />
        <a href="/">Home </a>
        <a href="/about">About </a>
      </div>
    )
  }
}

export default Scores