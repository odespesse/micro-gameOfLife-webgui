export function setWorld(world) {
    return {
        type: 'SET_WORLD',
        world: world,
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
