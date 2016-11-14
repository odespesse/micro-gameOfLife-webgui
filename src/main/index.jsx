import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';

const WORLD = [
    [false, false, false, true],
    [true, true, true, false],
    [false, true, false, true],
    [false, false, false, true],
];

ReactDOM.render(
    <Grid world={WORLD} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
