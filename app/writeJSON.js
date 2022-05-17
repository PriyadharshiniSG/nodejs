const users = require('./users');
const fs = require('fs');
let user = { name: 'Priya', age: 21, language: ['English', 'Tamil', 'Hindi'] };
users.push(user);
//
fs.writeFile('users.json', JSON.stringify(users), (err) => {
  // Checking for errors
  if (err) {
    console.log(err);
  }

  console.log('Done writing'); // Success
});
