const webpackMerge = require('webpack-merge');
const renderBaseConfig = require('./webpack.render.base.js');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
        new OptimizeCssAssetPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            })
        ]
    }
};

module.exports = webpackMerge.merge(renderBaseConfig, prodConfig);
