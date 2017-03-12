const path = require("path");
const webpack = require("webpack");
module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: {
        test: [
            "./js/index.js"
        ]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        publicPath: "/build/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }


};