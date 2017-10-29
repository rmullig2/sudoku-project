import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}
 
const Navbar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
      <NavLink to="/game" exact style={link} activeStyle={{ background: 'darkblue' }}>Play</NavLink>
      <NavLink to="/about" exact style={link} activeStyle={{ background: 'darkblue' }}>About</NavLink>
      <NavLink to="/scores" exact style={link} activeStyle={{ background: 'darkblue' }}>Login</NavLink>
    </div>
  )
}

export default Navbar