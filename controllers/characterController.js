const {query} = require('../database/postgres')
const {allCharacters} = require('../database/queries')

const getAllCharacters = async (req,res) =>{
    try {
        const results = await query(allCharacters)

        res.status(200).json(results?.rows ? { data: results.rows} : {data:[]})
    }catch (e){
        console.log(e);
        res.status(500).json({error:"Internal Error"})
    }

}


module.exports = {
    getAllCharacters
}