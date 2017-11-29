'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [ // TODO: add babel-loader?
            {
                test: /\.ts$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [{
                    loader: 'tslint-loader'
                }]
            },
            {
                test: /\.(css|html)$/,
                use: ['raw-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'], // '' not needed anymore
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    }
};