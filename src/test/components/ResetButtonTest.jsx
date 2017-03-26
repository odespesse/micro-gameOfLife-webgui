import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {List, Map} from 'immutable';
import reducer from '../../main/reducers/reducer';
import { setWorld } from '../../main/reducers/action_creators';
import { GameContainer } from '../../main/components/Game';
import { mount } from 'enzyme';
import {expect} from 'chai';

describe('ResetButton', () => {

    it('Reset grid on click', () => {
        const store = createStore(reducer);
        store.dispatch(setWorld(
            Map({
                generation: 51,
                grid: List.of(
                    List.of(true, true,),
                    List.of(true, true,),
                ),
            }),
        ));

        const component = mount(
           <Provider store={store}>
                <GameContainer />
            </Provider>
        );

        const resetButton = component.find('ResetButton');
        resetButton.simulate('click');
        expect(store.getState().get('world').get('generation')).to.equal(0);
        expect(store.getState().get('world').get('grid').get(0).get(0)).to.be.false;
        expect(store.getState().get('world').get('grid').get(0).get(1)).to.be.false;
        expect(store.getState().get('world').get('grid').get(1).get(0)).to.be.false;
        expect(store.getState().get('world').get('grid').get(1).get(1)).to.be.false;
    });
});
