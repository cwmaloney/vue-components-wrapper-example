
const path                = require('path');
const webpack             = require('webpack');

// Webpack plugins
const ExtractTextPlugin   = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin   = require('optimize-css-assets-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");
const UglifyJSPlugin      = require('uglifyjs-webpack-plugin');

function resolve(dir) {
	return path.resolve(__dirname, dir);
}

module.exports = (env) => {
	return {
		entry : {
			index: './src/index.js'
		},
		output : {
			filename : 'hello-components.js',
			path : path.resolve(__dirname, 'dist')
		},
		resolve : {
			extensions : ['.vue', '.js'],
			alias : {
				'vue$' : resolve('node_modules/vue/dist/vue.esm.js')
			}
		},
		externals : {
			vue : 'Vue',
			lodash : 'lodash'
		},
		module : {
			rules : [
				{
					test : /\.vue$/,
					loader : 'vue-loader',
					options : {
						loaders : ExtractTextPlugin.extract({
							use : {
								css : [
									'vue-style-loader',
									'css-loader'
								],
								postcss : [
									'vue-style-loader',
									'css-loader'
								],
								less : [
									{
										loader : 'vue-style-loader'
									},
									{
										loader : 'css-loader'
									},
									{
										loader : 'less-loader',
										options : {
											paths : [
												path.resolve(__dirname, 'src/less')
											],
											sourceMap : true
										}
									}
								]
							},
							fallback: 'vue-style-loader'
						})
					}
				},
				{
					test : /\.js$/,
					loader : 'babel-loader',
					include : [
						resolve('src')
					]
				}
			]
		},
		plugins : [
			// new UglifyJSPlugin({
			// 	sourceMap : true
			// }),
			new OptimizeCSSPlugin({
				cssProcessorOptions: {
					safe: true
				}
			})
		]
	};
};