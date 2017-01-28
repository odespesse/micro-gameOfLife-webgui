import {setWorld, startSimulation, pauseSimulation} from '../../main/reducers/action_creators';
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../main/reducers/reducer';

describe('reducer', () => {

    it('handles SET_WORLD with plain JS object', () => {
        const initialState = Map();
        const action = setWorld(
            Map({
                generation: 3,
                grid: List.of(
                    List.of(false, false, true),
                    List.of(true, true, false),
                ),
            }),
        );

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: false,
            world: {
                generation: 3,
                grid: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('handles SET_WORLD without initialState', () => {
       const action = setWorld(
            Map({
                generation: 0,
                grid: List.of(
                    List.of(false, false, false),
                    List.of(false, false, false),
                ),
            }),
        );

        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: false,
            world: {
                generation: 0,
                grid: [
                    [false, false, false],
                    [false, false, false],
                ]
            }
        }));
    });

    it('start a paused game', () => {
        const initialState = Map({
            isSimulationStarted: false,
            world: Map({
                generation: 0,
                grid:
                    List.of(
                        List.of(false, false, true),
                        List.of(true, true, false),
                    )
            }),
        });
        const action = startSimulation();

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: true,
            world: {
                generation: 0,
                grid: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('pause a started game', () => {
        const initialState = Map({
            isSimulationStarted: true,
        });
        const action = pauseSimulation();

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: false,
            world: {},
        }));
    });
});
