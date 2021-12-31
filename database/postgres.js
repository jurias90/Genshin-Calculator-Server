const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'genshin_calculator',
    password: 'l33tb453',
    port: 5432,
})



const query = async (q, values) => {
   return await pool.query(q , values );
}

module.exports = {query}