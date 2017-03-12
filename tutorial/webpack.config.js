const webpack = require("webpack");
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // vendor: ["jquery", "mustache"],
        "bundle": "./src/index",
        "test": "./test"
    },
    output: {
        path: 'builds',
        filename: '[name].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'builds/'
    },
    plugins: [
        new CleanPlugin("builds"),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 100, // ~50kb
        }),

        new webpack.optimize.CommonsChunkPlugin({

            name: 'vendor', // Move dependencies to our main file
            // chunks: ["bundle","test"],
            // children: true, // Look for common dependencies in all children,
            // minChunks: 2, // How many times a dependency must come up before being extracted
            minChunks: function (module, count) {
                console.log(module.resource + " " + count);
                return true;
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js/,
                loader: "eslint-loader",
                include: /src/,
                enforce: "pre"
            },
            {
                test: /\.js/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader',
                // loader: ExtractPlugin.extract({use: 'css-loader!sass-loader'}),
            },
            {
                test: /\.html/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url-loader?limit=2000',
            },
        ],
    },
    devServer: {
        hot: true,
    }
};
