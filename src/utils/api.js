import Reactotron from 'reactotron-react-js';

/** API to call serverless CRUD functions */

/** 
 * READ ALL 
 * Returns every coffeehouse listed in the DB */
const readAll = async () => 
    await (await fetch('/.netlify/functions/fetch-coffeehouses/fetch-coffeehouses.js')).json();

export default {
    readAll: readAll
    // add additional API export statements here
}