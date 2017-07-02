import { combineReducers } from 'redux';

import jobs from './jobs';
import message from './message';

const rootReducer = combineReducers({
    jobs,
    message
});

export default rootReducer;