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

});