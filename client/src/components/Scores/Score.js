import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { LikeScore } from '../../api/LikeScore.js';

class Score extends Component {
  constructor() {
    super();
    //console.log(this);
    //this.state = { likes: 0 };
  }
  
  increment = () => {
    console.log(this.props);
    this.props.LikeScore(this.props.id);     // update Likes by 1
    //this.setState({
    //  likes: this.state.likes + 1,
    //})
  }
  
  render(){
    //console.log(this.props);
    return (<span>{this.props.name} - {Math.floor(this.props.time/60000)} minutes,
    {Math.round(this.props.time/60000%60)} seconds  {this.props.likes || 0}
    <input type="button" id="score" value="Like" onClick={ this.increment } /></span>)
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({LikeScore: LikeScore}, dispatch)
}

function mapStateToProps(state) {
  return { high_scores: state.high_scores }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)

//export default Score