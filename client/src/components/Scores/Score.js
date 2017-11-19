import React, {Component} from 'react'

let likes = 0;;

class Score extends Component {
  constructor() {
    super();
    this.state = { likes: 0 };
  }
  increment = () => {
    var inc = this.state.likes + 1;
    this.setState({
      likes: inc,
    })
  }
  
  render(){
    console.log(this);
    return (<span>{this.props.name} - {Math.floor(this.props.time/60000)} minutes,
    {Math.round(this.props.time/60000%60)} seconds  {this.state.likes}
    <input type="button" value="Like" onClick={ this.increment } /></span>)
  }
}

//const Score = ({ name, time }) =>
//  <span>{name} - {Math.floor(time/60000)} minutes, {Math.round(time/60000%60)} seconds</span>

export default Score