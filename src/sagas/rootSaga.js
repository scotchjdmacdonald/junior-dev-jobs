import { takeEvery } from 'redux-saga/effects';

import { FETCH_JOBS, ADD_JOB, UPDATE_JOB } from '../constants/actions';
import { fetchJobs, addJob, updateJob } from './jobs';

export default function* rootSaga() {
    yield takeEvery(FETCH_JOBS, fetchJobs);
    yield takeEvery(ADD_JOB, addJob);
    yield takeEvery(UPDATE_JOB, updateJob);
}