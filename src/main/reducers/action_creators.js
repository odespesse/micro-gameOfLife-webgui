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
