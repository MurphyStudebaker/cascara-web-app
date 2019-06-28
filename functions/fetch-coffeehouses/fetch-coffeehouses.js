const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const {API_URL, API_CLIENT_ID, API_KEY } = process.env;

  // Format and send response to GET call
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }

  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  var base = Airtable.base(API_CLIENT_ID);

  const houses = [];

  base('Coffeehouses').select({
    view: "Grid view"
  }).firstPage(function(err, records) {
    if (err) { 
      console.log(err); 
      send(err);
      return; 
    }
    records.forEach(function(record) {
      console.log('Retrieved: ', record.get('name'));
      houses.push({
        id: record['id'],
        name: record.get('name'),
        neighborhood: record.get('neighborhood'),
        coffeeScore: record.get('coffeeScore'),
        wifiScore: record.get('wifiScore'),
        amenities: record.get('amenities'),
      });
    });

    send(houses);
  });
}
