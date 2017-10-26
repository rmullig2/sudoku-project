import React from 'react'

const Square = ({ id, value, onKeyPress }) =>
  <input id={id} type="text" className="square" value={value} onKeyPress={onKeyPress} />

export default Square