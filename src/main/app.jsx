import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/reducer';
import {setWorld} from './reducers/action_creators';
import {GameContainer} from './components/Game';
import {List, Map} from 'immutable';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    ));

let height = screen.height / 45;
let width = (screen.width - 150) / 36;

let grid = List();
for (let i = 0; i < height; i++) {
    let row = List();
    for (let j = 0; j < width; j++) {
        row = row.push(false);
    }
    grid = grid.push(row);
}

store.dispatch(setWorld(
    Map({
        generation: 0,
        grid: grid,
    }),
));

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducer', () => {
      const nextRootReducer = require('./reducers/reducer');
      store.replaceReducer(nextRootReducer);
    });
}

export default class App extends React.Component {
  render() {
    return (
   <Provider store={store}>
        <GameContainer />
    </Provider>
    );
  }
}
