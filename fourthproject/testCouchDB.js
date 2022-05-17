var nano = require('nano');
const url =
  'https://apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2:bd763fb0b51e2d8e968a8154ae9b7869@aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudant.com';
const nanodb = nano(process.env.COUCHDB_URL || url); // Connect with CouchDB
const cargo = nanodb.use('cargo_database'); // Connect with Database
var book = {
  id: 'Harperlee@gmail.com',
  title: 'To Kill a Mocking bird',
  author: 'Harper lee',
  characters: {
    first: 'char1',
    second: 'char2',
    third: 'char3',
  },
};
function create(book, cb) {
  cargo.insert(book, book.id, cb);
}
create(book, function (err) {
  if (err) {
    throw err;
  } else {
    console.log('book inserted');
  }
});
