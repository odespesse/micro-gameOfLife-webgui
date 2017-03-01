import {Map,List,fromJS} from 'immutable';
import axios from 'axios';

export function setWorld(world) {
    return {
        type: 'SET_WORLD',
        world: world,
    }
};

export function flipCellState(row, column) {
    return {
        type: 'FLIP_CELL_STATE',
        cellPosition: Map({
            row: row,
            column: column
        }),
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

export function fetchWorld() {
    return (dispatch, getState) => {
        if (!getState().get('isSimulationStarted')) {
            return;
        }
        let httpClient = axios.create({
            baseURL: 'http://localhost:80/v1.0/',
        });
        setTimeout(() => {
            httpClient.post('/world/next', {
                generation: getState().get('world').get('generation'),
                grid: getState().get('world').get('grid'),
            })
            .then(function(response) {
                dispatch(setWorld(
                    Map({
                        generation: response.data.generation,
                        grid: fromJS(response.data.grid),
                    })
                ));
                dispatch(fetchWorld());
            });
        }, 800);
    };
}
