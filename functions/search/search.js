const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const term = data.search;
  const type = data.type;
  
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

  console.log("Looking for " + term);
  const results = [];

  const formula = "{neighborhood}='" + term + "'";

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
        img: record.get('photo')[0].thumbnails.large.url,
        id: record['id'],
        name: record.get('name'),
        neighborhood: record.get('neighborhood'),
        coffeeScore: record.get('coffeeScore'),
        wifiScore: record.get('wifiScore'),
        goodFor: record.get('goodFor'),
      });
    });
    send(results);
  });
}
