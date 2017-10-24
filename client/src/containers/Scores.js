import React from 'react'
import ScoreList from '../comoonents/Scores/ScoreList.js'

const scores = [{ id: 2, name: 'dvw', time: 45289 },  { id: 1, name: 'ray', time: 35678 } ]

class Scores extends React.Component {
  render() {
    return(
      <div>
        <ScoreList scores={scores} />
        <a href="/">Home</a>
      </div>
    )
  }
}

export default Scores