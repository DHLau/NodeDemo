const http = require('http');
const querystring = require('querystring');

http.createServer(function(req, res){
	// post - req
	var str = ''; // 接收数据

	// 有一段数据到达（很多次）
	var i = 0;
	req.on('data',function(data){
		console.log(`第${i++}次`)
		str+=data;
	});
	
	// 只会发生一次，全部到达触发
	req.on('end',function(){
		var post = querystring.parse(str);
		console.log(post);
	});
	res.end();
}).listen(8081);

