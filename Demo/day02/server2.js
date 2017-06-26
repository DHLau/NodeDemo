const http = require('http');
var server = http.createServer(function(req,res){
	console.log(req.url);
	switch(req.url) {
		case '/1.html':
			res.write("1111");
			break;
		case '/2.html':
			res.write("2222");
			break;
		default:
			res.write("404");
			break;
	}
	res.end();
});
// 监听---- 等着
// 端口
server.listen(8082);

// localhost:8081
