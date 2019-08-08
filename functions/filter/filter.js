const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const filters = JSON.parse(event.body);
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
  const results = [];

  var formula = "AND(";
  var selectedCount = 0;

  for (var i in filters) {
    if(filters[i].selected === true) {
      selectedCount+=1
    }
  }

  var length = ""+selectedCount
  var found = 0

  for (var x in filters) {
    const text = filters[x].text;
    const field = filters[x].category;
    const selected = filters[x].selected;
    if(selected){
      formula+=  "FIND('"+text+"'," +field+") > 0";
      found += 1;
      if(found < length) {
        formula+=","
      }
    }
  }

  formula+=")"
  
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
