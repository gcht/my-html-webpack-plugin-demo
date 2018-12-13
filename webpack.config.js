const path = require('path');
console.log('__dirname is ' + __dirname);

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = [
	'dist',
	'build'//可以根据需要增加
]
   
// the clean options to use
let cleanOptions = {
	root:     __dirname, //'/full/webpack/root/path',
	exclude:  ['readme.md'],
	verbose:  true,// Write logs to console.
	dry:      false
}


module.exports = {
	//entry:  "./src/index.js",
	entry: { 
		'js/index': path.resolve(__dirname, './src/index.js'),
		'js/public/common': path.resolve(__dirname, './src/js/common.js'),
		'js/app/detail': path.resolve(__dirname, './src/js/detail.js'),
		'js/app/list': path.resolve(__dirname, './src/js/list.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist/assets'),//打包后的文件存放的地方np
		filename:'[name]-[chunkhash:8].js'
		
		
		//filename: "bundle-[chunkhash:8].js"//打包后输出文件的文件名
		
	},
	plugins: [
		new CleanWebpackPlugin(pathsToClean, cleanOptions),
		new HtmlWebpackPlugin({
			title: 'the html is generated and the scripts are loaded automaticly by HtmlWebpackPlugin without a source template at ' + (new Date()).toLocaleString(),
      		filename: 'html/test/test-auto-generated.html'//输出的html文件名
		}),
		new HtmlWebpackPlugin({  // Also generate a test.html
			filename: 'html/test/test-[hash:8].html',//输出的html文件名
			title:'the script is automaticly loaded by HtmlWebpackPlugin in the html at ' + (new Date()).toLocaleString(),
			template: 'src/tpl/tpl-test.html',
			inject: 'body'

		}),
		new HtmlWebpackPlugin({
			filename: 'html/app/detail-[chunkhash:8].html',			
			title:'the script is loaded by the property[chunks] of HtmlWebpackPlugin in the html at ' + (new Date()).toLocaleString(),
			template: 'src/tpl/tpl-detail.html',
			chunks: ['common', 'detail'],	
			//inject: true,	//设置了chunks后，inejct就不起作用，inject设置与否都没关系
			showErrors: true
		}),
		new HtmlWebpackPlugin({
			filename: 'html/app/list-[chunkhash:8].html',			
			title:'the script is loaded by the template code in the html at' + (new Date()).toLocaleString(),
			template: 'src/tpl/tpl-list.html',
			inject: false,       //inject默认是true，也就是说HtmlWebpackPlugin会自动加载entry里面所有的js；
			//如果设置了chunks会按照chunks来加载，inject就失效（设置与否不起作用）了。
			//如果不想加载所有入口js，可以有两种方式：
			//方式1:直接设置chunks
			//方式2:（1）设置inject为false，（2）然后通过template代码加载所需要的。注意：如果不设置inject为false，inject也会起作用，造成重复加载			
			showErrors: true
		})
	  ]
}