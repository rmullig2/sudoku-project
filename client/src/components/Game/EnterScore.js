import React from 'react';
import { connect } from 'react-redux';
import { enterHighScore } from '../../actions.js';
import { bindActionCreators } from 'redux';
import { PostScore } from '../../api/PostScore.js';
import { browserHistory } from 'react-router';

class EnterScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
    
  handleSubmit(event) {
    let solution_time = this.props.board.end_time = this.props.board.start_time;
    this.props.PostScore(this.state.name, solution_time);
    browserHistory.push('/scores');
  }
  
  render() {
    if (this.props.board.solved) {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <textarea value={this.state.name} maxlength="3" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
    else
      return(
        <div>
          { console.log(this.props.board.solved) }
          { null }
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({enterHighScore: enterHighScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterScore)
