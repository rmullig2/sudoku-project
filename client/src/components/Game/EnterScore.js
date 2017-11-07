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
    this.setState({name: event.target.value});
  }
    
  handleSubmit(event) {
    let solution_time = this.props.board.end_time - this.props.board.start_time;
    PostScore(this.state.name, solution_time);
    browserHistory.push('/');
    event.preventDefault();    
  }
  
  render() {
    if (this.props.board.solved) {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} size="3" maxLength="3" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
    else
      return(
        <div>
          { browserHistory.push('/') }
        </div>
      )
  }
}

function mapStateToProps(state) {
  return { board: state.board }
}

function mapDispatchToProps(dispatch) {
  return {}
  //return bindActionCreators({PostScore: PostScore}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterScore)
