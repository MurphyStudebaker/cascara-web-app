const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
  const userID = body.userID;
  const data = body.data;

  //const filters = data.filters;
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  const {API_URL, API_CLIENT_ID, API_KEY } = process.env;

  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  var base = Airtable.base(API_CLIENT_ID);

  base('UserSubmissions').create({
    "netlifyID": userID,
    "name": data.name,
    "streetAddress": data.address,
    "city": data.city,
    "neighborhood": data.neighborhood,
    "state": data.state,
    "goodFor": data.goodFor,
    "outletDesc": data.outletDesc,
    "seatingDesc": data.seatingDesc,
  }, function(err, record) {
    if (err) {
      console.error(err);
      send(err);
      return;
    }
    send(record.getId());
  });
}