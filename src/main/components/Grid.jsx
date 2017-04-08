import React from 'react';

require('./grid.css');

class GridCell extends React.Component {
    isAlive() {
        return this.props.isAlive;
    }
    render() {
        return (
            <td>
                <button className={this.isAlive() ? "cell alive" : "cell"}
                        onClick={() => this.props.flipCellState(this.props.rowIndex, this.props.columnIndex)}>
                </button>
            </td>
        );
    }
}

class GridRow extends React.Component {
    getRow() {
        return this.props.row;
    }
    render() {
        let cells = this.getRow().map((cell, index) => {
            return(
                <GridCell
                    key={index}
                    isAlive={cell}
                    flipCellState={this.props.flipCellState}
                    rowIndex={this.props.rowIndex}
                    columnIndex={index}
                />
            );
        }, this);
        return (
            <tr>
               {cells}
            </tr>
        );
    }
}

export default class Grid extends React.Component {
    getGrid() {
        return this.props.grid || [];
    }
    render() {
        let rows = this.getGrid().map((row, index) => {
            return (
                <GridRow
                    key={index}
                    row={row}
                    rowIndex={index}
                    flipCellState={this.props.flipCellState}
                />
            );
        }, this);
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
};
