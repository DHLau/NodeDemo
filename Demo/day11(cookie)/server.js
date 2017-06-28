const express = require('express');

var server = express();

server.use('/aaa/a.html',function(req, res){
	res.cookie('user','blue',{path:'/aaa',maxAge:30*24*3600*1000});
	res.send('ok');
})

server.listen(8081);
