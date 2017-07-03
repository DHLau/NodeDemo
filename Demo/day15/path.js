const path = require('path');

var str = 'ldh/Destop/a.html';
var obj = path.parse(str);
// base : 文件名部分
// ext : 拓展名
// dir: 文件路径
// name:  文件名部分(不包含拓展名)
console.log(obj);

