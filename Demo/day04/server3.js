const http = require('http')
const urlLib = require('url')
var server = http.createServer(function(req,res){
	// 获取前台的请求数据
	var get = urlLib.parse(req.url,true).query;
	console.log(get);
	res.write('aaa');
	res.end();
}).listen(8082);