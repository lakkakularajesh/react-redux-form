var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {

    entry: [path.resolve(ROOT_PATH, 'src/main.jsx')],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    output: {
        filename: 'bundle.js',
        publicPath: "/assets/"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        port: 9000,
        inline: true
    }
};
