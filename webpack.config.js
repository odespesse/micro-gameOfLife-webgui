const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './node_modules/react-hot-loader/patch',
        './node_modules/webpack-dev-server/client?http://0.0.0.0:8080',
        './node_modules/webpack/hot/only-dev-server',
        './src/main/index.jsx',
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        publicPath: 'http://0.0.0.0:8080/',
        host: '0.0.0.0',
        hot: true,
        inline: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};
