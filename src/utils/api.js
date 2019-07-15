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

const filter = async (filters) =>
    await (await fetch(('/.netlify/functions/filter/filter.js/'), 
    {
        method: 'POST',
        body: JSON.stringify(filters),
    })).json();

const fetchWithId = (data) =>
    fetch('/.netlify/functions/fetch-with-id/fetch-with-id.js/'+data, 
    {
        method: 'POST',
    }).then(response => {
        return response.json()
    })

export default {
    readAll: readAll,
    search: search,
    fetchWithId: fetchWithId,
    filter: filter,
    // add additional API export statements here
}