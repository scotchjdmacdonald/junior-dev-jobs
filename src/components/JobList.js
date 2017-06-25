import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { FETCH_JOBS } from '../constants/actions';

class JobList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ type: FETCH_JOBS })
  }

  render() {
    return (
      <div>
        <h1>JuniorDev Jobs</h1>
      </div>
    );
  }
}

export default connect(state => {
  return {
    dispatch: state.dispatch
  }
})(JobList);