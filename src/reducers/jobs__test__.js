import expect from 'expect';
import jobs from './jobs';
import { SET_JOBS } from '../constants/actions';

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

    it(`Should return an empty array when state is undefined`, () => {
        const action = {
            type: 'NOT_AN_ACTION'
        }

        const result = jobs(undefined, action);

        expect(result).toEqual([]);
    });

    it(`Should return the action payload when action type is ${SET_JOBS}`, () => {
        const action = {
            type: SET_JOBS,
            payload: [{
                this: 'is my job',
                there: 'are many like it',
                but: 'this one is mine'
            }]
        };

        const result = jobs([], action);

        expect(result).toEqual({
                this: 'is my job',
                there: 'are many like it',
                but: 'this one is mine'
            });
    });
});