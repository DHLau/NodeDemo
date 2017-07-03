const jade = require('jade');
console.log(jade.renderFile('./views/11.jade',{pretty:true,
	arr: ['aaa','123','asdfasf','aowejfasodfa']
}));

