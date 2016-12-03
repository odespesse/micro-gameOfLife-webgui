import React from 'react';
import {connect} from 'react-redux';
import StartPauseButton from './StartPauseButton';
import Grid from './Grid';

export class Game extends React.Component{
    render() {
        return (
            <div>
                <StartPauseButton startSimulation={this.props.startSimulation}
                    pauseSimulation={this.props.pauseSimulation}/>
                <Grid world={this.props.world}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
  return {
    world: state.getIn(['grid', 'currentWorld']),
  };
}

export const GameContainer = connect(mapStateToProps)(Game);
