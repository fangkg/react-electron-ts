const mainBaseConfig = require('./webpack.main.base.js');
const webpackMerge = require('webpack-merge');

const devConfig = {
    mode: 'development'
}

module.exports = webpackMerge.merge(mainBaseConfig, devConfig);
