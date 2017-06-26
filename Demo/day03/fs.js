const fs = require('fs');
// readfile(文件名，回调函数)
// fs.writeFile(path, data, options, callback);
fs.readFile('aaa.txt',function(err,data){
	if (err) {
		console.log("读取失败");
	} else {
		console.log(data.toString());
	}
});

fs.writeFile('bbb.txt','我是刘敦辉',function(err){
	console.log(err);
});

