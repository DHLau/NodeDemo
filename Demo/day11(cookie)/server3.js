const express = require('express');
const cookieParser = require('cookie-parser');


var server = express();

// cookie
server.use(cookieParser('wesasdfasfd'));


server.use('/',function(req, res){
	req.secret = 'wesasdfasfd'; // 签名
	res.cookie('user','blue',{signed:true});

	console.log('未签名的cookies' , req.cookies);
	console.log('签名的cookies' , req.signedCookies);
	res.send('ok');
})

server.listen(8081);
