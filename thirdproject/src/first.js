const express = require('express'); // importing express module
const app = express(); // creating an object for express
const port = 8000; // The port in which the nodejs going to listen
// Express is routing environment
const root = '/';
app.get(root, (request, response) => {
  response.send('Hello from Express!');
});
const contact = '/contact';
app.get(contact, (request, response) => {
  var name = request.query.name;
  console.log(request.query);
  for (const key in request.query) {
    console.log(key, request.query[key]);
  }
  response.send(`Hello from Express! ${name}`);
});
const about = '/about';
app.get(about, (request, response) => {
  var city = request.query.city;
  console.log(request.query);
  for (const key in request.query) {
    console.log(key, request.query[key]);
  }
  response.send(`Hello from Express! ${city}`);
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
