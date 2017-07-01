import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class JobView extends Component {
  render() {
    const { job } = this.props;
    
    return (
      <div>
          <div>Job title</div>
          <div>{job.title}</div>

          <div>Job description</div>
          <div>{job.description}</div>
      </div>
    );
  }
}

JobView.propTypes = {
  job: PropTypes.object
};

export default connect((state, props) => {
  const { match } = props;
  return {
    job: state.jobs.find(job => job._id === match.params.jobId)
  }
})(JobView);
