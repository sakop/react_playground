const webpack = require("webpack");

module.exports = {
    entry: {
        vendor: ["jquery", "mustache"],
    },
    output: {
        path: 'builds/',
        filename: 'vendor.bundle.js',
        library: "vendor_lib"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "vendor_lib",
            path: "builds/vendor-manifest.json"
        })

    ]
};