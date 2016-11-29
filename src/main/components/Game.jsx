import React from 'react';
import StartPauseButton from './StartPauseButton';
import {GridContainer} from './Grid';

export default class Game extends React.Component{
    render() {
        return (
            <div>
                <StartPauseButton startSimulation={this.props.startSimulation}
                    pauseSimulation={this.props.pauseSimulation}/>
                <GridContainer />
            </div>
        );
    }
}
