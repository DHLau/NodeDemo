const ejs = require('ejs');

ejs.renderFile('./views/1.ejs',{name:'123'},function(err,data){
	console.log(data);
});
