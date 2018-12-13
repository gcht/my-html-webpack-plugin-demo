
path = require('path');
console.log("##### __dirname is " + __dirname);
module.exports = {
	devtool: 'eval-source-map',//配置生成source Maps，选择合适的选项
	entry:  __dirname + "/app/js/main.js",
	//entry:  "./app/js/main.js",
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	resolve:{
		root:[
			path.join(__dirname + '/src'),
			path.join(__dirname + '/node_modules'),
			path.join(__dirname)
		],
		modulesDirectories:['node_modules', path.join(__dirname, '../node_modules')],
		extensions:['','.web.js','.js','.json','.css','.scss']
	},
	
	module: {//在配置文件里添加JSON loader
		loaders: [{
			test: /\.json$/,
			loader: "json"
		},{
			test: /\.css$/, 
			loader: "style!css"
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',//在webpack的module部分的loaders里进行配置即可
			query: {
				presets: ['es2015','react']
			}
		},{
			test: require.resolve("./app/js/shim.js"),  
			loader: "exports?shim"
		}, { 
			test: /\.(png|jpg)$/, 
			loader: 'url-loader?limit=8192'
		},{ 
			test: /\.scss$/, 
			loader: 'style!css!sass?sourceMap'
		}]
	},
  
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
  } 
}