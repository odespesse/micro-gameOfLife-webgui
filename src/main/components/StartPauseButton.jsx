import React from 'react';

export default class StartPauseButton extends React.Component {
    render() {
        let clsBtn = this.props.isSimulationStarted ? "btn btn-warning btn-block active" : "btn btn-success btn-block";
        let clsIcon = this.props.isSimulationStarted ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play";
        let text = this.props.isSimulationStarted ? 'Pause' : 'Start';
        return (
            <button type="button"
                onClick={() => this.props.isSimulationStarted ? this.props.pauseSimulation() : this.props.startSimulation()}
                className={clsBtn} aria-label="Left Align">
                <span className={clsIcon} aria-hidden="true"></span>
                {text}
            </button>
        );
    }
}
