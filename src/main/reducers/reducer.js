import {Map,List} from 'immutable';

function world(state = Map(), action) {
    switch (action.type) {
        case 'SET_WORLD':
            return action.world;
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
        world: world(state.get('world'), action),
    });
}
