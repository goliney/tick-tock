const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildDir = 'build';

const config = {
    entry: './src/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, buildDir)
    },
    // devtool: "source-map",
    devServer: {
        contentBase: buildDir,
        open: true,
        inline: true,
        port: 8888
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tick Tock',
            hash: true,
            showErrors: true,
            template: 'src/index.html'
        })
    ]
};

module.exports = config;