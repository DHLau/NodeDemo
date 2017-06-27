const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

var users = {};

var server = http.createServer(function(req,res){
	// 解析数据
	var str = '';
	req.on('data',function(data){
		str += data;
	});
	req.on('end',function(){
		var obj = urlLib.parse(req.url,true);

		const url = obj.pathname;
		const GET = obj.query;
		const POST = querystring.parse(str);

		// 区分-接口-文件
		if (url == '/user') { // 接口
			switch(GET.act) {
				case 'reg':
					// 至少检测用户名是否存在
					// 插入users
					if (users[GET.user]) {
						res.write('{"ok":false,"msg":"该用户名已被注册"}');
					} else {
						users[GET.user]=GET.pass;
						res.write('{"ok":true,"msg":"恭喜注册成功"}');
					}
				break;
				case 'login':
					// 检测用户是否存在
					if (users[GET.user] == null) {
						res.write('{"ok":false,"msg":"此用户不存在"}');
					} else if (users[GET.user] != GET.pass) {
						res.write('{"ok":false,"msg":"用户名或密码有误"}');
					} else {
						res.write('{"ok":true,"msg":"恭喜登录成功"}');
					}
					// 检测用户的密码

				break;
				default:
					res.write('{"ok":false,"msg":"未知的act"}')
				break;
			}
			res.end();
		} else { // 读取文件
			var file_name = './www' + url;
			fs.readFile(file_name, function(err,data){
				if(err) {
					res.write('404');
				} else {
					res.write(data);
				}
				res.end();
			});
		}	
	})
});

server.listen('8081');