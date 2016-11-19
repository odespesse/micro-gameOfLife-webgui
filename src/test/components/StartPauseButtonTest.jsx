import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import StartPauseButton from '../../main/components/StartPauseButton';
import {expect} from 'chai';

describe('StartPauseButton', () => {

    it('Invoke callback when start button is clicked', () => {
        let started = false;
        const startCbk = () => started = true;
        const component = renderIntoDocument(
            <StartPauseButton isStarted = {started}
                  startSimulation={startCbk} />
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(started).to.be.false;
        Simulate.click(buttons[0]);
        expect(started).to.be.true;
    });

    it('Invoke callback when pause button is clicked', () => {
        let started = true;
        const pauseCbk = () => started = false;
        const component = renderIntoDocument(
            <StartPauseButton isStarted = {started}
                  pauseSimulation={pauseCbk} />
        );

        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(started).to.be.true;
        Simulate.click(buttons[0]);
        expect(started).to.be.false;
    });
});
