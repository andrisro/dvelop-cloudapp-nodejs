const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/rootResource.js',
    plugins: [
        new UglifyJsPlugin()
    ],
    output: {
        filename: 'target/rootResource_min.js',
        libraryTarget: "umd"
    }
};