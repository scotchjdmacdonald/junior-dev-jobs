import React, { Component } from 'react';
import { connect } from 'react-redux';

class JobView extends Component {
  render() {
    const { job } = this.props;
    
    return (
      <div>
        <ul>
          <li>{job.title}</li>
          <li>{job.description}</li>
        </ul>
      </div>
    );
  }
}

JobView.propTypes = {};

export default connect((state, props) => {
  const { match } = props;
  return {
    job: state.jobs.find(job => job._id === match.params.jobId)
  }
})(JobView);
