const http = require('http')
const querystring = require('querystring');
var server = http.createServer(function(req,res){
	// 获取前台的请求数据
	var get = {};

	if (req.url.indexOf('?') != -1) {
		console.log(req.url);
		var arr = req.url.split('?');
		get = querystring.parse(arr[1]);
	} else {
		var url = req.url;
	}
	console.log(get);
	res.write('aaa');
	res.end();
}).listen(8082);