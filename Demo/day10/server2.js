const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

server.use(bodyParser.urlencoded({
	extended:false; // 拓展模式
	limit:  2 * 1024  //大小限制,默认100k
}));

// POST
server.use('/', function(req,res){
	console.log(req.body); POST
});