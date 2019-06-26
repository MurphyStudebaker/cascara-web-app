import Reactotron from 'reactotron-react-js';

/** API to call serverless CRUD functions */

/** 
 * READ ALL 
 * Returns every coffeehouse listed in the DB */
const readAll = async () => 
    await (await fetch('/.netlify/functions/fetch-coffeehouses/fetch-coffeehouses.js')).json();

const search = async (data) =>
    await (await fetch(('/.netlify/functions/search/search.js'+ data), 
    {
        method: 'POST',
        body: JSON.stringify(data),
    })).json();

export default {
    readAll: readAll,
    search: search,
    // add additional API export statements here
}