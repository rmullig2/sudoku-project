import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import History from '../components/About/History.js'
import Rules from '../components/About/Rules.js'
//import '../App.css';

class About extends React.Component {
  render() {
    return(
      <div>
        <History />
        <Rules />
      </div>
    )
  }
}

export default About