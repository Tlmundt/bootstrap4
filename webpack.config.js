const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
		watchContentBase: true,
		watchOptions: {
            ignored: /node_modules/
        },
	    compress: true,
	    stats: {
		    all: false,
		    colors: true,
		    errors: true,
		    warnings: true,
		    errorDetails: true
	    },
	    inline: true,
	    hot: true,
	    host: '0.0.0.0',
	    port: 8080,
	    disableHostCheck: true,
	    useLocalIp: true
	},
	module: {
    	rules: [
        	{
            	test: /\.css$/,
            	use: [MiniCssExtractPlugin.loader, 'css-loader']
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
        new webpack.HotModuleReplacementPlugin()
	]
};