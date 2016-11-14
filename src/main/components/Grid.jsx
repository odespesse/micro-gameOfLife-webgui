import React from 'react';

let GridCell = React.createClass({
    isAlive: function() {
        return this.props.isAlive;
    },
    render: function() {
        return (
            <td>{this.isAlive() ? 1 : 0}</td>
        );
    }
});

let GridRow = React.createClass({
    getRow: function() {
        return this.props.row;
    },
    render: function() {
        let cells = this.getRow().map((cell, index) => {
            return(
                <GridCell key={index} isAlive={cell} />
            );
        }, this);
        return (
            <tr>
               {cells}
            </tr>
        );
    }
});

export default React.createClass({
    getWorld: function() {
        return this.props.world || [];
    },
    render: function() {
        let rows = this.getWorld().map((row, index) => {
            return (
                <GridRow key={index} row={row} />
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
});
