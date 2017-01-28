import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {List} from 'immutable';
import Grid from '../../main/components/Grid';
import {expect} from 'chai';

describe('Grid', () => {

    it('Render a dead cell', () => {
        const WORLD= List.of(
            List.of(0)
        );
        const component = renderIntoDocument(
            <Grid world={WORLD} />
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(1);
        expect(buttons[0].classList.value).to.equal('cell');
    });

    it('Render a complex world', () => {
        const WORLD= List.of(
            List.of(0, 0, 1),
            List.of(1, 1, 0),
        );
        const component = renderIntoDocument(
            <Grid world={WORLD} />
        );

        const trs = scryRenderedDOMComponentsWithTag(component, 'tr');
        expect(trs.length).to.equal(2);

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons[0].classList.value).to.equal('cell');
        expect(buttons[1].classList.value).to.equal('cell');
        expect(buttons[2].classList.value).to.equal('cell alive');
        expect(buttons[3].classList.value).to.equal('cell alive');
        expect(buttons[4].classList.value).to.equal('cell alive');
        expect(buttons[5].classList.value).to.equal('cell');
    });
});
