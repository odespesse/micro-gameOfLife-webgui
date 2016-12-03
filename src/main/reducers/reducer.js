import {Map,List} from 'immutable';

function currentWorld(state = List(), action) {
    switch (action.type) {
        case 'SET_WORLD':
            return action.world.get('world');
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
    const gridProp = state.get('grid', Map());
    return Map({
        isSimulationStarted: isSimulationStarted(state.get('isSimulationStarted'), action),
        grid: gridProp.merge({
            currentWorld: currentWorld(gridProp.get('currentWorld'), action),
        }),
    });
}
