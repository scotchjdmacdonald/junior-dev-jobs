import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_JOB, REMOVE_MESSAGE } from '../constants/actions';

class JobAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    const { message, dispatch } = this.props;
    this.setState({
      [event.target.name]: event.target.value
    });

    if (message.content) {
      dispatch({ type: REMOVE_MESSAGE });
    }
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
    const { message } = this.props;
    return (
      <div>
        <input 
          type="text"
          name="title" 
          placeholder="title"
          value={this.state.title} 
          onChange={this.handleChange} />
      
        <textarea 
          name="description" 
          placeholder="description"
          value={this.state.description} 
          onChange={this.handleChange} />
        
        <div onClick={this.handleSubmit}
             className="jd-submit-button">
          add job
        </div>
        {message.content &&
        <div className={message.success ? 'jd-success-message' : 'jd-fail-message' }>
          {message.content}
        </div>
        }
      </div>
    );
  }
}

JobAdd.propTypes = {
  dispatch: PropTypes.func
};

export default connect(state => {
  return {
    dispatch: state.dispatch,
    message: state.message
  }
})(JobAdd);
