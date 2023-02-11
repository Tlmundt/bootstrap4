const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        assetModuleFilename: "img/[name][ext]",
    },
    watchOptions: {
        ignored: /node_modules/,
      },
    devServer: {
		static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        watchFiles: ["src/*.html"],
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
        historyApiFallback: true,
	},
	module: {
    	rules: [
        	{
            	test: /\.css$/,
            	use: [MiniCssExtractPlugin.loader, 'css-loader']
        	},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.html$/i,
                use: 'html-loader'
            }
    	]
	},
	optimization: {
	    minimize: false,
	},
	plugins: [
    	new MiniCssExtractPlugin({
        	filename: 'styles.css',
    	}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new CleanWebpackPlugin(),
	]
};