import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import {setGrid} from './reducers/action_creators';
import {GameContainer} from './components/Game';
import {List, Map} from 'immutable';

const store = createStore(reducer);
store.dispatch(setGrid(
    Map({
        generation: 0,
        currentWorld: List.of(
            List.of(false, false, false, true),
            List.of(true, true, true, false),
            List.of(false, true, false, true),
            List.of(false, false, false, true),
        ),
    }),
));

ReactDOM.render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('app')
);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducer', () => {
      const nextRootReducer = require('./reducers/reducer');
      store.replaceReducer(nextRootReducer);
    });
}
