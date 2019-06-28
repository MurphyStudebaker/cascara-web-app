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

  const id = event.path.match(/([^\/]*)\/*$/)[0]

  base('Coffeehouses').find(id, 
    function(err, record) {
      if (err) {
        console.log(err);
        send(err);
        return;
      }
      const house = {
        name: record.get('name')
      }
      send(house);
    })
}