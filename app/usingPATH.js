const path = require('path');
const filePath = path.join('/data/', 'readme.txt');
const absolute = path.resolve(__dirname, 'data', 'readme.txt');

console.log(__dirname);
console.log(filePath);
console.log(absolute);
