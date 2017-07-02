import { SUCCESS_MESSAGE, FAIL_MESSAGE, REMOVE_MESSAGE } from '../constants/actions';

export default function jobs(state = {}, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE: {
            return {
                success: true,
                content: `Great Job!`
            };
        }
        case FAIL_MESSAGE: {
            return {
                success: false,
                content: `Ba Bow! :(`
            };
        }
        case REMOVE_MESSAGE: {
            return {}
        }
        default:
            return state;
    }
}