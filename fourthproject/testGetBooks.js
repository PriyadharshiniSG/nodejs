var nano = require('nano');
const url =
  'https://apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2:bd763fb0b51e2d8e968a8154ae9b7869@aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudant.com';
const nanodb = nano(process.env.COUCHDB_URL || url); // Connect with CouchDB
const cargo = nanodb.use('cargo_database'); // Connect with Database
const start = async function () {
  const doc = await cargo.get('d52fc666c7c78e737b4338b0491b8b14'); // book id
  console.log(doc);
};
start();
