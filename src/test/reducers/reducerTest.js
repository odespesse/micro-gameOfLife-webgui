import {setState, startSimulation, pauseSimulation} from '../../main/reducers/action_creators';
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../../main/reducers/reducer';

describe('reducer', () => {

    it('handles SET_STATE with plain JS object', () => {
        const initialState = Map();
        const action = setState(
            Map({
                isSimulationStarted: true,
                grid: Map({
                    currentWorld:
                        List.of(
                            List.of(false, false, true),
                            List.of(true, true, false),
                        )
                }),
            }),
        );

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: true,
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('handles SET_STATE without initialState', () => {
       const action = setState(
            Map({
                isSimulationStarted: true,
                grid: Map({
                    currentWorld:
                        List.of(
                            List.of(false, false, true),
                            List.of(true, true, false),
                        )
                }),
            }),
        );

        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: true,
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('start a paused game', () => {
        const initialState = Map({
            isSimulationStarted: false,
            grid: Map({
                currentWorld:
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
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

    it('pause a started game', () => {
        const initialState = Map({
            isSimulationStarted: true,
            grid: Map({
                currentWorld:
                    List.of(
                        List.of(false, false, true),
                        List.of(true, true, false),
                    )
            }),
        });
        const action = pauseSimulation();

        const nextState = reducer(initialState, action);
        expect(nextState).to.equal(fromJS({
            isSimulationStarted: false,
            grid: {
                currentWorld: [
                    [false, false, true],
                    [true, true, false],
                ]
            }
        }));
    });

});
