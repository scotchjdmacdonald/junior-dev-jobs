import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FETCH_SINGLE_JOB } from '../constants/actions';

class JobView extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    const idIndex = window.location.href.lastIndexOf('/');
    const id = window.location.href.substring(idIndex + 1);

    dispatch({ type: FETCH_SINGLE_JOB, payload: { id } });
  }

  render() {
    const { job } = this.props;
    
    return (
      <div>
          {job
          ? <div>
              <div className="jd-job-view__heading">Title</div>
              <div className="jd-job-view__section">{job.title}</div>

              <div className="jd-job-view__heading">Description</div>
              <div>{job.description}</div>
            </div>
          : <div>No job found</div>
          }
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
    dispatch: state.dispatch,
    job: state.jobs.find(job => job._id === match.params.jobId)
  }
})(JobView);
