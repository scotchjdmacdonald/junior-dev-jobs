import { call, put } from 'redux-saga/effects';
import { getApiData, postApiData, patchApiData } from '../helpers/apiData';
import { SET_JOBS } from '../constants/actions';

export function* fetchJobs() {
    const receivedData = yield call(getApiData, '/api/jobs');
    yield put({
        type: SET_JOBS,
        payload: receivedData
    });
};

export function* fetchSingleJob(data) {
    const receivedData = yield call(getApiData, `/api/jobs/${data.payload.id}`)
    yield put({
        type: SET_JOBS,
        payload: [ receivedData ]
    });
};

export function* addJob(data) {
    const { title, description } = data.payload;
    const job = { title, description };
    const receivedData = yield call(postApiData, '/api/jobs', job);
    console.log('receivedData ', receivedData);
};