const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/template.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|jpg|jpeg|webp|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
};
