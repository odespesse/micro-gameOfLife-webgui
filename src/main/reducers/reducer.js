import {Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function changeSimulationState(state, newSimulationState) {
    return state.set('isSimulationStarted', newSimulationState);
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'START_SIMULATION':
            return changeSimulationState(state, action.isSimulationStarted);
        case 'PAUSE_SIMULATION':
            return changeSimulationState(state, action.isSimulationStarted);
    }
    return state;
}
