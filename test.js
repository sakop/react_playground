var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
    entry: './src/main.js',
    output: {
        path: 'build',
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            include: path.resolve('src'),
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    plugins: [new HtmlWebpackPlugin()]
};
