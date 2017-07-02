import { takeEvery } from 'redux-saga/effects';

import { 
    FETCH_JOBS, 
    FETCH_SINGLE_JOB, 
    ADD_JOB, 
    UPDATE_JOB 
} from '../constants/actions';
import { fetchJobs, fetchSingleJob, addJob, updateJob } from './jobs';

export default function* rootSaga() {
    yield takeEvery(FETCH_JOBS, fetchJobs);
    yield takeEvery(FETCH_SINGLE_JOB, fetchSingleJob);
    yield takeEvery(ADD_JOB, addJob);
}