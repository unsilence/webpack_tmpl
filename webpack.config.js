var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool:"eval-source-map",
	entry: __dirname + "/app/main.js",
	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.json$/,
				loader:"json"
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel"
			},
			{
				test:/\.css$/,
				loader:"style!css?modules!postcss"
			}
		]
	},
	postcss:[
		require('autoprefixer')//调用atoprefixer
	],
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()//热加载插件
	],
	devServer:{
		contentBase:"./public",
		colors:true,
		historyApiFallback:true,
		inline:true
	},
	watch:true
	

}