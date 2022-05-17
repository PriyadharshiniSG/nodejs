const fModule = require('./module3');
const sayHello = require('./module4');
console.log(fModule);
fModule.echo('Tom');
sayHello(fModule.myGroup);
sayHello('Jerry');
