const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
        ],
    },

    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'defer',
        }),
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
    },
};
