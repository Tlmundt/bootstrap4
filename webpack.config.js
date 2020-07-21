const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
		watchContentBase: true,
	    compress: true,
	    stats: {
		    all: false,
		    colors: true,
		    errors: true,
		    warnings: true,
		    errorDetails: true
	    },
	    hot: true,
	    host: '0.0.0.0',
	    port: 8080,
	    disableHostCheck: true,
	    useLocalIp: true
	},
	module: {
    	rules: [
        	{
            	test: /\.html$/,
            	use: [
                	{
                    	loader: 'file-loader',
                    	options: {
                        	name: '[name].[ext]'
                    	}
                	}
            	],
            	exclude: path.resolve(__dirname, 'src/index.html')
        	}
    	]
	},
	optimization: {
	    minimize: false
	},
	plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/index.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_2_basic_typography.html',
            })
            ,
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_3_text_alignment_display.html',
            })
            ,
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_4_floats_position.html',
            })
            ,
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_5_colors_background.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_6_spacing.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_7_sizing.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/2_8_breakpoints.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_2_buttons.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_3_navbar.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_4_list_groups_badges.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_5_forms.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_6_input_groups.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_7_alerts_progress.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_8_tables_pagination.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_9_cards.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_10_media_object.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/3_11_jumbotron.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/4_2_grid_system.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/4_3_grid_alignment.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/4_4_flexbox.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/4_5_auto_margins_wrapping_order.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_2_carousel.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_3_collapse.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_4_tooltips.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_5_popovers.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_6_modals.html',
            }),
            new HtmlWebpackPlugin({
                filename: '[name].[ext]',
                template: 'src/html-pages/5_7_scrollspy.html',
            })
	]
};