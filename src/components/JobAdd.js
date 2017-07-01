import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_JOB } from '../constants/actions';

class JobAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props;

    dispatch({ type: ADD_JOB, payload: this.state });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input 
            type="text"
            name="title" 
            value={this.state.title} 
            onChange={this.handleChange} />
        </label>
        <label>
          <input 
            type="text"
            name="description" 
            value={this.state.description} 
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

JobAdd.propTypes = {};

export default connect(state => {
  return {
    dispatch: state.dispatch
  }
})(JobAdd);
