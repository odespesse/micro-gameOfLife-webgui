import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';

const WORLD = [
    [false, false, false, true],
    [true, true, true, false],
    [false, true, false, true],
    [false, false, false, true],
];

ReactDOM.render(
    <Game world={WORLD} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
