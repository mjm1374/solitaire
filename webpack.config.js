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
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 9000,
		hot: true,
		client: {
			logging: 'info',
		},
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/template.html'),
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|jpg|jpeg|webp|svg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
		],
	},
};
