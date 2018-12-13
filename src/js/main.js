//main.js 
//require("!style!css!app.css");
//require("app.css");
debugger;
require("!style!css!../css/app.css");
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
document.write("<div>__dirname:" + __dirname+"</div>");
document.write("<div>当前时间为:" + (new Date()).toLocaleString()+"</div>");



var shim = require('./shim.js');
document.write('<div style="color:red">' + shim() + '</div>');


var summer = require('../libs/jq.js');
alert(summer);
alert(summer.open);
alert(summer.close);
/*
summer.openCamera({
	callback:function(args){
		alert(args.result)
	}
});
*/
