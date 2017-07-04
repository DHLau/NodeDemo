const mysql = require('mysql');

// 1.链接到服务器
// createConnection(哪台服务器,用户名,密码,那个数据库)
var db = mysql.createConnection({host:'localhost', port:'3306',user:'root',password:'liudh',database:'20170703'});

// 2.查询
// query(干啥,func)
db.query("SELECT * from `user_table`;",(err,data)=>{
	if (err) {
		console.log('出错了',err);
	} else {
		console.log('成功了',data);
		console.log(JSON.stringify(data));
	}
});



// SQL Structured Query Languange (结构化查询语句)

// 增 INSERT
// INSERT TO 表(字段列表) VAlUES(值列表)
// INSERT INTO `user_table` (`ID`,`username`,`password`) VALUES(0,'blue2','987654321');


// 删 DELETE
// 改 UPDATE


// 查 SELECT
// SELECT 什么 FROM 表

















