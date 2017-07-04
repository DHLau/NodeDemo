const express = require('express');

var server = express();

// 目录1 /user/ 
var userRouter = express.Router();
userRouter.get('/2.html',function(req,res){ // http://xxx.com/user/2.html
	res.send('user2222');
});
userRouter.get('/1.html',function(req,res){ // http://xxx.com/user/1.html
	res.send('user1asfdasdf');
});
server.use('/user',userRouter);




// 目录2 /article
var articleRouter = express.Router();
server.use('/article', articleRouter);
articleRouter.get('/1.html',function(req,res){
	res.send('article1');
});
articleRouter.get('/2.html',function(req,res){
	res.send('article2');
});
server.listen(8080);