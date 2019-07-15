const Airtable = require('airtable');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = function(event, context, callback) {
  const filters = JSON.parse(event.body);
  //const filters = data.filters;
  console.log(filters)
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
      console.log("count: " + selectedCount)
    }
  }

  var length = ""+selectedCount
  console.log("looping through " + length + "selected filters")
  var found = 0

  for (var x in filters) {
    const text = filters[x].text;
    const field = filters[x].category;
    const selected = filters[x].selected;
    if(selected){
      console.log("found" + text + " selected")
      formula+=  "FIND('"+text+"'," +field+") > 0";
      found += 1;
      console.log("FOUND: " + found + " LENGTH: " + length)
      if(found < length) {
        formula+=","
      }
    }
  }

  formula+=")"
  
  console.log("formula: " + formula);

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
        amenities: record.get('amenities'),
      });
    });
    send(results);
  });
}
