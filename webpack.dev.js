const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devServer: {
        static: {
            directory: path.join(__dirname, './src/index.html'),
        },
        compress: true,
        port: 9000,
    },
});
