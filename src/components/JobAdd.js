import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

    this.setState({
      title: '',
      description: ''
    });
  }

  render() {
    return (
      <div>
        <input 
          type="text"
          name="title" 
          value={this.state.title} 
          onChange={this.handleChange} />
      
        <input 
          type="text"
          name="description" 
          value={this.state.description} 
          onChange={this.handleChange} />
        
        <div onClick={this.handleSubmit}
             className="jd-submit-button">
          Add job
        </div>
      </div>
    );
  }
}

JobAdd.propTypes = {
  dispatch: PropTypes.func
};

export default connect(state => {
  return {
    dispatch: state.dispatch
  }
})(JobAdd);
