const jade = require('jade');
console.log(jade.renderFile('./views/8.jade',{pretty:true,
	json:{width:'200px',height:'200px'},
	arr:['aaaa','left-wrap']
}));

