import React from 'react';

export default class StartPauseButton extends React.Component {
    render() {
        return (
            <div>
                {this.props.isSimulationStarted ?
                    <button onClick={() => this.props.pauseSimulation()}>Pause</button> :
                    <button onClick={() => this.props.startSimulation()}>Start</button>
                }
            </div>
        );
    }
}
