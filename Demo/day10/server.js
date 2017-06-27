const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');

var server = express();
server.listen(8080);

// GET
server.use('/', function(req,res){
	console.log(req.query); GET
});
