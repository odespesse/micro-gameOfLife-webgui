var path = require('path');

module.exports = {
    entry: [
        './src/main/index.js',
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
    }
};
