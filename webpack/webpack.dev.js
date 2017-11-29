'use strict'

const path = require('path');
const webpack = require('webpack');
const rootDir = path.resolve(__dirname, '..');

const HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devServer: {
        contentBase: path.resolve(rootDir, 'src'),
        port: 8080
    },
    devtool: 'source-map',
    entry: {
        app: [ path.resolve(rootDir, 'src', 'main') ],
        vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
    },
    module: {
        rules: [
            {
                test: /\.(css|html)$/,
                use: ['raw-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader' // TODO: add babel-loader?
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
        //publicPath: '/assets'
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({ // Generally I prefer manually create an index.html file
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'app', 'index.html')
        })
    ],
    resolve: {
        extensions: [ '.js', '.ts' ]
    }
};
