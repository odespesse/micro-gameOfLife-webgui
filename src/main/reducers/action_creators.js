import {Map,List} from 'immutable';

export function setGrid(grid) {
    return {
        type: 'SET_GRID',
        grid: grid,
    }
};

export function startSimulation() {
    return {
        type: 'START_SIMULATION',
    }
};

export function pauseSimulation() {
    return {
        type: 'PAUSE_SIMULATION',
    }
};

export function fetchGrid() {
    return (dispatch, getState) => {
        if (!getState().get('isSimulationStarted')) {
            return;
        }
        let generation = getState().get('grid').get('generation');
        let world = null;
        if (generation % 2 === 0) {
            world = List.of(
                List.of(false, false, false, false, false, false),
                List.of(false, false, false, true, false, false),
                List.of(false, true, false, false, true, false),
                List.of(false, true, false, false, true, false),
                List.of(false, false, true, false, false, false),
                List.of(false, false, false, false, false, false),
            );
        } else {
            world = List.of(
                List.of(false, false, false, false, false, false),
                List.of(false, false, false, false, false, false),
                List.of(false, false, true, true, true, false),
                List.of(false, true, true, true, false, false),
                List.of(false, false, false, false, false, false),
                List.of(false, false, false, false, false, false),
            );
        }
        setTimeout(() => {
            dispatch(setGrid(
                Map({
                    generation: generation + 1,
                    currentWorld: world,
                })))
            dispatch(fetchGrid());
            },
            800
        );
    };
}
