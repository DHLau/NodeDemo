const jade = require('jade');
console.log(jade.renderFile('./views/13.jade',{pretty:true,
	content:"<h2>你好啊</h2><p>阿斯蒂芬来看</p>"
}));

