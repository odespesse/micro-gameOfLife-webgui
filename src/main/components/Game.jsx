import React from 'react';
import {connect} from 'react-redux';
import StartPauseButton from './StartPauseButton';
import Grid from './Grid';
import * as actionCreators from '../reducers/action_creators';

export class Game extends React.Component{
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
    }
    handleStart() {
        this.props.startSimulation();
        this.props.fetchGrid();
    }
    render() {
        return (
            <div>
                <StartPauseButton startSimulation={this.handleStart}
                    pauseSimulation={this.props.pauseSimulation}
                    isSimulationStarted={this.props.isSimulationStarted}/>
                <Grid world={this.props.world}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    world: state.getIn(['grid', 'currentWorld']),
    isSimulationStarted: state.get('isSimulationStarted'),
  };
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
