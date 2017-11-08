import React from 'react';
import History from '../components/About/History.js'
import Rules from '../components/About/Rules.js'
import './about.css';

class About extends React.Component {
  render() {
    return(
      <div className="page">
        <History />
        <Rules />
        <div id="lin">
          <a href="/">Home </a>
          <a href="/game">Play </a>
          <a href="/scores">High Scores</a>
        </div>
      </div>
    )
  }
}

export default About