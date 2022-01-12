const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
})



const query = async (q, values) => {
   return await pool.query(q , values );
}

module.exports = {query}