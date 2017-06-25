import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { FETCH_JOBS } from '../constants/actions';

class JobList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: FETCH_JOBS })
  }

  render() {
    const { jobs } = this.props;
    return (
      <div>
        <h1>JuniorDev Jobs</h1>
        <ul>
          {jobs.map(job => {
            return <li key={job._id}> job._id </li>
          })}
        </ul>
      </div>
    );
  }
}

JobList.PropTypes = {
  dispatch: PropTypes.func,
  jobs: PropTypes.array
}

export default connect(state => {
  return {
    dispatch: state.dispatch,
    jobs: state.jobs
  }
})(JobList);