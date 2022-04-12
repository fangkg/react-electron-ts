const mainBaseConfig = require('./webpack.main.base.js');
const webpackMerge = require('webpack-merge');

const prodConfig = {
    mode: 'production'
}

module.exports = webpackMerge.merge(mainBaseConfig, prodConfig);
