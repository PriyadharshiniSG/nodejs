const m5 = require('./module5');
console.log(m5);
m5.addValues(10, 20);
for (var item in m5.items) {
  console.log(m5.items[item]);
}
