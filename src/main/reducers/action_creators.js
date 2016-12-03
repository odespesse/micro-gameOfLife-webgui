export function setState(state) {
    return {
        type: 'SET_STATE',
        state: state,
    }
};

export function startSimulation() {
    return {
        type: 'START_SIMULATION',
        isSimulationStarted: true,
    }
};

export function pauseSimulation() {
    return {
        type: 'PAUSE_SIMULATION',
        isSimulationStarted: false,
    }
};
