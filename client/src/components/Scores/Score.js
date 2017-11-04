import React from 'react'

const Score = ({ name, time }) =>
  <span>{name} - {Math.floor(time/60000)} minutes, {Math.round(time/60000%60)} seconds</span>

export default Score