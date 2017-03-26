import React from 'react';

export default class ResetButton extends React.Component {
    render() {
        return (
            <button type="button"
                onClick={() => this.props.resetSimulation()}
                className="btn btn-danger btn-block" aria-label="Left Align">
                <span className="glyphicon glyphicon-stop" aria-hidden="true"></span> Reset
            </button>
        );
    }
}
