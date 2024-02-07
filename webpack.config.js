const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'img/[name][ext]',
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        watchFiles: ['src/*.html'],
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'posts.html',
            template: 'src/posts.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'categories.html',
            template: 'src/categories.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'details.html',
            template: 'src/details.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings.html',
            template: 'src/settings.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: 'src/profile.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: 'src/login.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ]
};