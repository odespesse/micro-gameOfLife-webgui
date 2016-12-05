import {Map,List} from 'immutable';

function grid(state = Map(), action) {
    switch (action.type) {
        case 'SET_GRID':
            return action.grid;
        default:
            return state;
    }
}

function isSimulationStarted(state = false, action) {
    switch (action.type) {
        case 'START_SIMULATION':
            return true;
        case 'PAUSE_SIMULATION':
            return false;
        default:
            return state;
    }
}

export default function(state = Map(), action) {
    return Map({
        isSimulationStarted: isSimulationStarted(state.get('isSimulationStarted'), action),
        grid: grid(state.get('grid'), action),
    });
}
