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
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '2_2_basic_typography.html',
            template: 'src/html-pages/2_2_basic_typography.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '2_3_text_alignment_display.html',
            template: 'src/html-pages/2_3_text_alignment_display.html',
            chunks: ['app']
        })
        ,
        new HtmlWebpackPlugin({
            filename: '2_4_floats_position.html',
            template: 'src/html-pages/2_4_floats_position.html',
            chunks: ['app']
        })
        ,
        new HtmlWebpackPlugin({
            filename: '2_5_colors_background.html',
            template: 'src/html-pages/2_5_colors_background.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '2_6_spacing.html',
            template: 'src/html-pages/2_6_spacing.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '2_7_sizing.html',
            template: 'src/html-pages/2_7_sizing.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '2_8_breakpoints.html',
            template: 'src/html-pages/2_8_breakpoints.html',
            chunks: ['app']
        }),
/*
        new HtmlWebpackPlugin({
            filename: '3_2_buttons.html',
            template: 'src/html-pages/3_2_buttons.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_3_navbar.html',
            template: 'src/html-pages/3_3_navbar.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_4_list_groups_badges.html',
            template: 'src/html-pages/3_4_list_groups_badges.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_5_forms.html',
            template: 'src/html-pages/3_5_forms.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_6_input_groups.html',
            template: 'src/html-pages/3_6_input_groups.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_7_alerts_progress.html',
            template: 'src/html-pages/3_7_alerts_progress.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_8_tables_pagination.html',
            template: 'src/html-pages/3_8_tables_pagination.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_9_cards.html',
            template: 'src/html-pages/3_9_cards.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_10_media_object.html',
            template: 'src/html-pages/3_10_media_object.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '3_11_jumbotron.html',
            template: 'src/html-pages/3_11_jumbotron.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '4_2_grid_system.html',
            template: 'src/html-pages/4_2_grid_system.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '4_3_grid_alignment.html',
            template: 'src/html-pages/4_3_grid_alignment.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '4_4_flexbox.html',
            template: 'src/html-pages/4_4_flexbox.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '4_5_auto_margins_wrapping_order.html',
            template: 'src/html-pages/4_5_auto_margins_wrapping_order.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_2_carousel.html',
            template: 'src/html-pages/5_2_carousel.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_3_collapse.html',
            template: 'src/html-pages/5_3_collapse.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_4_tooltips.html',
            template: 'src/html-pages/5_4_tooltips.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_5_popovers.html',
            template: 'src/html-pages/5_5_popovers.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_6_modals.html',
            template: 'src/html-pages/5_6_modals.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: '5_7_scrollspy.html',
            template: 'src/html-pages/5_7_scrollspy.html',
            chunks: ['app']
        })
*/
        new webpack.HotModuleReplacementPlugin()
	]
};