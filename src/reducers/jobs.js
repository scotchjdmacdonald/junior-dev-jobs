import { SET_JOBS } from '../constants/actions';

export default function jobs(state = [], action) {
    switch (action.type) {
        case SET_JOBS: {
            return action.payload;
        }
        default:
            return state;
    }
}