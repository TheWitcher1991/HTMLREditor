'use strict';

const path = require('path');
const webpack = require('webpack');

require('babel-polyfill');

module.exports = {
	entry: ['babel-polyfill', './src/app.js'],
	output: {
		path: path.join(__dirname, './build'),
		filename: 'script/htmlreditor.bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js']
	}
};
