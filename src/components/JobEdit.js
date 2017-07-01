import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UPDATE_JOB } from '../constants/actions';

class JobEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.job.title,
      description: props.job.description
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    const { dispatch } = this.props;

    dispatch({ type: UPDATE_JOB, payload: this.state });

    event.preventDefault();
  }

  render() {
    return (
      <div>
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
            <input type="submit" value="Update" />
          </form>
      </div>
    );
  }
}

JobEdit.propTypes = {};

export default connect((state, props) => {
  const { match } = props;
  return {
    job: state.jobs.find(job => job._id === match.params.jobId)
  }
})(JobEdit);

