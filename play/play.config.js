var path = require("path");

module.exports = {
    entry: ["./example"],
    output: {
        path: path.resolve(__dirname, "builds"),
        filename: '[name]-[chunkhash].js',
        library: "[name]_vendor_lib"
        // filename:'[hash].js'
        //filename:'[chunkhash].js'
    }
};

