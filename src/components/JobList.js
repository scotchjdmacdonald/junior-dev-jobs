import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
          {jobs && jobs.length > 0
          ? jobs.map(job => {
            return <div key={job._id}
                        className="jd-job-list-item">
                     <Link  to={`/jobs/view/${job._id}`}
                            className="jd-job-link">
                       {job.title}
                     </Link>
                   </div>
          })
          : <div className="jd-subtle-heading">no jobs listed</div>}
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