import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div>
                {this.props.isStarted ?
                    <button onClick={() => this.props.pauseSimulation()}>Pause</button> :
                    <button onClick={() => this.props.startSimulation()}>Start</button>
                }
            </div>
        );
    }
});
