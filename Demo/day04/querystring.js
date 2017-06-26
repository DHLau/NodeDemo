const querystring = require('querystring');
var json = querystring.parse("user=age&pass=123456&age=19");
console.log(json);
