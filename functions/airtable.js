import fetch from 'node-fetch';

const coffeeApiRootUrl = "https://api.airtable.com/v0/appC2g1LfUOKIbp1p/Coffeehouses?api_key="
const coffeeApiKey = process.env.coffeeApiKey;

exports.handler = async (event) => {
    const { httpMethod } = event;

    if (httpMethod == 'GET') {
        const response = await fetch('${coffeeApiRootURl}${coffeeApiKey}', { 'content-type': 'application/json'})
        const data = await response.text();

        return { statusCode: 200, body: data};
    }

    return { statusCode: 404 };
}