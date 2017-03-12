const webpack = require("webpack");

module.exports = {
    entry: {
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
        // new CleanPlugin("builds"),

        new webpack.DllReferencePlugin({
            context: ".",
            manifest: require("./builds/vendor-manifest.json")
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