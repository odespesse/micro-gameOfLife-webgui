import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Grid from '../../main/components/Grid';
import {expect} from 'chai';

describe('Grid', () => {

    it('Render a dead cell', () => {
        const WORLD=[
            [0]
        ];
        const component = renderIntoDocument(
            <Grid world={WORLD} />
        );

        const tds = scryRenderedDOMComponentsWithTag(component, 'td');

        expect(tds.length).to.equal(1);
        expect(tds[0].textContent).to.equal('0');
    });

    it('Render a complex world', () => {
        const WORLD=[
            [0, 0, 1],
            [1, 1, 0],
        ];
        const component = renderIntoDocument(
            <Grid world={WORLD} />
        );

        const trs = scryRenderedDOMComponentsWithTag(component, 'tr');
        expect(trs.length).to.equal(2);

        const tds = scryRenderedDOMComponentsWithTag(component, 'td');
        expect(tds[0].textContent).to.equal('0');
        expect(tds[1].textContent).to.equal('0');
        expect(tds[2].textContent).to.equal('1');
        expect(tds[3].textContent).to.equal('1');
        expect(tds[4].textContent).to.equal('1');
        expect(tds[5].textContent).to.equal('0');
    });
});
