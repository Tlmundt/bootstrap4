const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        	
    	]
	},
	optimization: {
	    minimize: false
	},
	plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin()
	]
};