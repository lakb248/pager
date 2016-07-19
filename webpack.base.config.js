/**
 * @file webpack base config file
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        build: './src/index.js',
        vendor: ['vue', 'vue-resource', 'vue-router']
    },
    output: {
        path: require('path').resolve('build') + '/',
        publicPath: '/build/',
        filename: 'build.js',
        chunkFilename: '[hash].[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.scss$/,
<<<<<<< HEAD

            loader: ExtractTextPlugin.extract({notExtractLoader: 'style', loader: 'css!sass'}),
=======
            loader: ExtractTextPlugin.extract('style', 'css!sass'),
>>>>>>> 8a25ed476d0eeeee17d9b045aa8a5b72f8ec2107
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'}),
        new ExtractTextPlugin('index.css')
    ]
};
