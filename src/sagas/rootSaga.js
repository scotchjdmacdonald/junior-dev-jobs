import { takeEvery } from 'redux-saga/effects';

import { FETCH_JOBS } from '../constants/actions';
import { fetchJobs } from './jobs';

export default function* rootSaga() {
    yield takeEvery(FETCH_JOBS, fetchJobs);
}