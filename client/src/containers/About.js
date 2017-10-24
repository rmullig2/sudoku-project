import React, { Component } from 'react';
import History from '../components/About/History.js'
import Rules from '../components/About/Rules.js'

class About extends React.Component {
  render() {
    return(
      <div>
        <History />
        <Rules />
        <a href="/">Home</a>
      </div>
    )
  }
}

export default About