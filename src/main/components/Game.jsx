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
        this.props.fetchWorld();
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h1>The Game of Life</h1>
                </div>
                <div className="row">
                    <Grid grid={this.props.grid}/>
                    <StartPauseButton startSimulation={this.handleStart}
                        pauseSimulation={this.props.pauseSimulation}
                        isSimulationStarted={this.props.isSimulationStarted}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    grid: state.getIn(['world', 'grid']),
    isSimulationStarted: state.get('isSimulationStarted'),
  };
}

export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
