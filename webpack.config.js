var path = require("path");
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: {
        // 'app': './js/app.js',
        // 'placeOrder': './js/placeOrder.js',
        // 'nopi': './js/nopi.js',
        'crude': './js/crude.js',
        // 'addressForm': './js/address-form.js',
        // 'calculator': './js/calculator.js'
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "build/",
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader"
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
