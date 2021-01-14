/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        overlay: true,
        hot: true,
        port: 8080
    },
};

module.exports = merge(common, config);
