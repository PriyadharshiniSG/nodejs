var nano = require('nano');
const url =
  'https://apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2:bd763fb0b51e2d8e968a8154ae9b7869@aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudant.com';
const nanodb = nano(process.env.COUCHDB_URL || url); // Connect with CouchDB
const cargo = nanodb.use('cargo_database');
// const booksdb = require('./CouchDB/cargo');
const queryview = async function () {
  const doclist = await cargo.view(
    'view1',
    'cargo_all_docs',
    function (err, body) {
      if (err) {
        console.log('Querying cargo failed. ' + err.message + '\n');
      } else {
        console.log('Cargo queried. Response: ');
        body.rows.forEach((doc) => {
          console.log(JSON.stringify(doc) + '\n');
        });
      }
    }
  );
};
queryview();
