var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './node_modules/webpack-dev-server/client?http://0.0.0.0:8080',
        './node_modules/webpack/hot/only-dev-server',
        './src/main/index.js',
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
