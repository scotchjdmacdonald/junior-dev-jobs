import { 
    SUCCESS_MESSAGE, 
    FAIL_MESSAGE, 
    REMOVE_MESSAGE,
    INCOMPLETE_MESSAGE
} from '../constants/actions';

export default function jobs(state = {}, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE: {
            return {
                success: true,
                content: `great job! :)`
            };
        }
        case FAIL_MESSAGE: {
            return {
                success: false,
                content: `ba bow! :(`
            };
        }
        case INCOMPLETE_MESSAGE: {
            return {
                success: false,
                content: `try using your words... :P`
            }
        }
        case REMOVE_MESSAGE: {
            return {}
        }
        default:
            return state;
    }
}