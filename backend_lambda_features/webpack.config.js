const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    entry: './src/featuresdescription.js',
    plugins: [
        new UglifyJsPlugin()
    ],
    output: {
        filename: 'target/featuresdescription_min.js',
        libraryTarget: "umd"
    }
};