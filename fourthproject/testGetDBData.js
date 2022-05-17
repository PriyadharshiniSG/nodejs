const nano = require('nano')({
  url: 'https://apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2:bd763fb0b51e2d8e968a8154ae9b7869@aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudant.com',
});
// Getting information about the database
function getbookbyrev(rev) {
  return nano.request({
    db: 'cargo_database',
    method: 'get',
    params: {
      rev: rev,
    },
  });
}
getbookbyrev('2-870bea679bfa939e828d8c5a4aaea9bb').then((body) => {
  console.log(body);
});
