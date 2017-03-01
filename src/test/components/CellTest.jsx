import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    findRenderedDOMComponentWithTag,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';
import {expect} from 'chai';
import {List} from 'immutable';
import Grid from '../../main/components/Grid';

describe('Cell', () => {

    it('Dead cell become alive on click', () => {
        let GRID = List.of(
            List.of(0)
        );

        const flipCellState = (row, column) => {
            GRID = GRID.setIn([row ,column], Math.pow(GRID.get(row).get(column)-1, 2));
        };

        const component = renderIntoDocument(
            <Grid grid={GRID} flipCellState={flipCellState}/>
        );

        const button = findRenderedDOMComponentWithTag(component, 'button');

        expect(GRID.get(0).get(0)).to.equal(0);
        Simulate.click(button);
        expect(GRID.get(0).get(0)).to.equal(1);
    });

    it('Alive cell become dead on click', () => {
        let GRID = List.of(
            List.of(0, 0, 0),
            List.of(0, 0, 0),
            List.of(0, 1, 0),
            List.of(0, 0, 0),
        );
        const flipCellState = (row, column) => {
            GRID = GRID.setIn([row ,column], Math.pow(GRID.get(row).get(column)-1, 2));
        };

        const component = renderIntoDocument(
            <Grid grid={GRID} flipCellState={flipCellState}/>
        );

        const button = findRenderedDOMComponentWithClass(component, 'cell alive');

        expect(GRID.get(2).get(1)).to.equal(1);
        Simulate.click(button);
        expect(GRID.get(2).get(1)).to.equal(0);
    });
});
