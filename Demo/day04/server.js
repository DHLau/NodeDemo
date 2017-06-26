const http = require('http')
var server = http.createServer(function(req,res){
	// 获取前台的请求数据
	var get = {};

	if (req.url.indexOf('?') != -1) {
		console.log(req.url);
		var arr = req.url.split('?');
		console.log(arr);
		var arr2 = arr[1].split('&');
		for (var i = 0; i < arr2.length; i++) {
			var arr3 = arr2[i].split('=');
			get[arr3[0]] = arr3[1];
		}
	} else {
		var url = req.url;
	}
	console.log(get);
	res.write('aaa');
	res.end();
}).listen(8082);