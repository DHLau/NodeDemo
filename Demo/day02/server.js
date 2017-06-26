const http = require('http');
var server = http.createServer(function(req,res){
	console.log('有人来了');
	res.write("abc");
	res.end();
});
// 监听---- 等着
// 端口
server.listen(8081);

// localhost:8081