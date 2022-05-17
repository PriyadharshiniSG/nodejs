var fs = require('fs');

console.log('start reading a file...');
fs.readFile('phonebook.dat', function (err, contactData) {
  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) {
    console.log('ERROR!!! ${err}');
    return console.log(err); //throw err;
  }
  var text = contactData.toString();
  let myfunc = function () {
    console.log('INSIDE readFILE');
  };
  setTimeout(myfunc, 3000);
  var lines = text.split('\n');
  lines.forEach(function (line) {
    var parts = line.split(',');
    var name = parts[0];
    var phone = parts[1];
    console.log(name + ' - ' + phone);
  });
});

console.log('end of the file');
