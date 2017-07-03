const ejs = require('ejs');

ejs.renderFile('./views/3.ejs',{json:{arr:[
		{user:'aaa',pass:'123456'},
		{user:'bbb',pass:'1231234'},
		{user:'ccc',pass:'12345667'}
	]}},function(err,data){
	console.log(data);
});
