import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class JobEdit extends Component {

  componentDidMount() {
    // this.loadData();
  }

  render() {
    const { job } = this.props;
    console.log(job);
    return (
      <h2>View Job</h2>
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

