const path = require("path");
const webpack = require("webpack");
module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: {
        test: [
            "webpack-hot-middleware/client",
            "./js/index.js"
        ],
        context: [
            "webpack-hot-middleware/client",
            "./js/context_demo"
        ]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        publicPath: "/build/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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