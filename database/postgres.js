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

const query = async (q, values) => {
   return await pool.query(q , values );
}
const ascencionQuery = async (ids)=>{
    return await query(ascencionMaterials(paramString(ids)), ids)
}

module.exports = {query, ascencionQuery}