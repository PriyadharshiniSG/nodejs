const items = ['item1', 'item2', 'item3', 'item4'];

const addValues = (num1, num2) => {
  console.log(num1 + num2);
  items.push(num1);
  items.push(num2);
};

module.exports = { items, addValues };
