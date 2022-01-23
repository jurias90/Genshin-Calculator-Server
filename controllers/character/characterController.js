const {query} = require('../../database/postgres')
const {getAllCharacters} = require('../../database/queries')

const allCharacters = async (req,res) =>{
    try {
        const results = await query(getAllCharacters)

        res.status(200).json(results?.rows ? { data: results.rows} : {data:[]})
    }catch (e){
        res.status(500).json({error:"Internal Error"})
    }

}


module.exports = {
    allCharacters
}