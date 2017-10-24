import React from 'react'
import Score from './Score.js'

const ScoreList = ( {scores} ) =>
  <ol>
    {scores.forEach(
      (score) =>
        <li key={score.id.toString()}>
          <Score {...score} />
        </li>
    )}
  </ol>
  
export default ScoreList