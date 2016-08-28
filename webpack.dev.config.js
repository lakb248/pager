/**
 * @file webpack dev config file
 */
var config = require('./webpack.base.config');
var DashboardPlugin = require('webpack-dashboard/plugin');
config.devtool = 'inline-source-map';

config.plugins = (config.plugins || []).concat([
    new DashboardPlugin({port: 3001})
]);

module.exports = config;
