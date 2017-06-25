import expect from 'expect';
import jobs from './jobs';

describe('jobs reducer ', () => {
    it('Should return the same state if action.type is invalid', () => {
        const action = {
            type: 'NOT_AN_ACTION'
        };

        const state = [{
            must: 'be immutable'
        }]

        const result = jobs(state, action);
        
        expect(result).toEqual(state);
    });
});