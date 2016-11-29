import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../main/reducers/reducer';

describe('reducer', () => {

    it('handles SET_STATE with plain JS object', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                grid: Map({
                    currentWorld:
                        List.of(
                            List.of(false, false, true),
                            List.of(true, true, false),
                        )
                }),
            }),
        }

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('handles SET_STATE without initialState', () => {
       const action = {
            type: 'SET_STATE',
            state: Map({
                grid: Map({
                    currentWorld:
                        List.of(
                            List.of(false, false, true),
                            List.of(true, true, false),
                        )
                }),
            }),
        }

        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

});