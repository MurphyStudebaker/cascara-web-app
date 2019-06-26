const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const searchTerm = data.search;
  
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

  console.log("Looking for " + searchTerm);
  const results = [];

  const formula = "{neighborhood}='" + searchTerm + "'";

  base('Coffeehouses').select({
    view: "Grid view",
    filterByFormula: formula,
  }).firstPage(function(err, records) {
    if (err) { 
      console.log(err); 
      send(err);
      return; 
    }
    records.forEach(function(record) {
      console.log('Retrieved: ', record.get('name'));
      results.push({
        name: record.get('name'),
        neighborhood: record.get('neighborhood'),
        coffeeScore: record.get('coffeeScore'),
        wifiScore: record.get('wifiScore'),
        amenities: record.get('amenities'),
      });
    });
    send(results);
  });
}
