const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');

// 连接池
const db = mysql.createPool({host:'localhost',user:'root',password:'liudh',database:'blob'});


var server = express();
server.listen(8080);


// 1.解析cookie
server.use(cookieParser('adfafddsf'));

// 2.使用session
var arr = []; 
for (var i = 0; i < 10000; i++) {
	arr.push('keys_'+Math.random());
}
server.use(cookieSession({name:'ldhId',keys:arr,maxAge: 20 * 3600 * 1000}));

// 3.使用post
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest: './www/upload'}).any());

// 用户请求
server.use('/',function(req,res,next){
	console.log(req.query,req.body,req.files,req.cookies,req.session);
	next();
})

// 4.配置模板引擎
// 输出什么东西
server.set('view engine','html');
// 读取文件在哪
server.set('views','./template');
// 哪种模板引擎
server.engine('html',consolidate.ejs);

server.get('/',(req,res)=>{
	// 查询banner东西
	db.query("SELECT * FROM banner_table",(err,data)=>{
		if (err) {
			console.log(err);
			res.status(500).send('database error').end();
		} else {
			console.log(data);
			res.render('index.ejs',{banners:data});
		}
	});
});

// 4.static数据
server.use(static('./www'));




