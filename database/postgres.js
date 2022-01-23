const {ascencionMaterials} = require("./queries");
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
})

const paramString = (params) => {
    let string = ""
    for (let i = 0; i < params.length; i++) {
        string += `$${i + 1}`
        if (i >= params.length - 1) break
        string += ","
    }
    return string
}
/**
 * Query is a function that accesses the database for a specific query using a query string and the values
 *   associated with it. The query string should be made with modified conditions.
 * @param {string}queryString to send to postgres
 * @param {Array}values are values attributed to the conditions of the query.
 * @returns {Promise<*>} which is the data from the database.
 */
const query = async (queryString, values) => {
   return await pool.query(queryString , values );
}
/**
 * AscensionQuery is a modified function using query for ascension materials.
 * @param {Array<number>} ids of the character ids in the database.
 * @returns {Promise<Array<{
 *   id:Number,
 *   level:Number,
 *   character_name: String,
 *   item_name: String,
 *   amount: Number,
 * } >>} returns the ascension materials of specific characters given by ids.
 */
const ascencionQuery = async (ids)=>{
    return await query(ascencionMaterials(paramString(ids)), ids)
}

module.exports = {query, ascencionQuery}