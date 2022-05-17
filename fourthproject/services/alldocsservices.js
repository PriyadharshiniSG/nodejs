const express = require('express');
var nano = require('nano');
const url =
  'https://apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2:bd763fb0b51e2d8e968a8154ae9b7869@aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudant.com';
const nanodb = nano(process.env.COUCHDB_URL || url); // Connect with CouchDB
const cargodb = nanodb.use('cargo_database');
const app = express();
const port = 8000;
const cargo = express.Router();
app.use('/cargo', cargo);
app.get('/', (request, response) => {
  var html =
    '<h1>Welcome to Cargo world</h1>' +
    ' <div><a href=http://localhost:8000/cargo/view1/cargo_all_docs>All docs</a></div>' +
    ' <div><a href=http://localhost:8000/cargo/view1/cargo_by_title>By Title</a></div>';
  response.send(html);
});
cargo.get('/view1/:viewname', function (request, response) {
  var viewname = request.params['viewname'];
  console.log(`ViewName ${viewname} `);
  const queryview = async function () {
    const doclist = await cargodb.view('view1', viewname, function (err, body) {
      if (err) {
        console.log('Querying Cargo failed. ' + err.message + '\n');
      } else {
        // Website you wish to allow to connect
        response.setHeader(
          'Access-Control-Allow-Origin',
          'http://localhost:4200'
        );
        // Request methods you wish to allow
        response.setHeader(
          'Access-Control-Allow-Methods',
          'GET, POST, OPTIONS, PUT, PATCH, DELETE'
        );
        // Request headers you wish to allow
        response.setHeader(
          'Access-Control-Allow-Headers',
          'X-Requested-With,content-type'
        );

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', true);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(JSON.stringify(body));
      }
    });
  };
  queryview();
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on
    http://localhost:${port}`);
});
