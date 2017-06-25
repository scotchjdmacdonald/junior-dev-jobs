import { call, put } from 'redux-saga/effects';
import { getApiData } from '../helpers/apiData';
import { SET_JOBS } from '../constants/actions';

export function* fetchJobs() {
    const receivedData = yield call(getApiData, 'api/jobs');
    yield put({
        type: SET_JOBS,
        payload: receivedData
    })
};