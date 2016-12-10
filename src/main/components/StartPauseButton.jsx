import React from 'react';

export default class StartPauseButton extends React.Component {
    render() {
        return (
            <div className="col-sm-2">
                {this.props.isSimulationStarted ?
                    <button type="button"
                        onClick={() => this.props.pauseSimulation()}
                        className="btn btn-warning btn-block active" aria-label="Left Align">
                        <span className="glyphicon glyphicon-pause" aria-hidden="true"></span> Pause
                    </button> :
                    <button type="button"
                        onClick={() => this.props.startSimulation()}
                        className="btn btn-success btn-block" aria-label="Left Align">
                        <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Start
                    </button>
                }
            </div>
        );
    }
}
