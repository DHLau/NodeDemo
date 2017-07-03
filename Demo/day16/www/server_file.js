const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const pathLib = require('path');

var objMulter = multer({dest: 'www/upload/'});


var server = express();
// 错误的
// server.use(bodyParser.urlencoded({extended:false}))
server.use(objMulter.any());

server.post('/',function(req,res){
	console.log(req.files[0].originalname);
	// 1.获取原始的文件拓展名
	// 1.2新文件名
	var newname = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

	// 2.重命名
	fs.rename(req.files[0].path, newname, function(error){
		if(error) {
			res.send('上传失败');
		} else {
			res.send('上传成功');
		}
	});
})
server.listen(8080);
