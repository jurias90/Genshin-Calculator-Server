const {query} = require('../database/postgres')
const {queryAllCharacters} = require('../database/queries')

const getAllCharacters = async (req,res) =>{
    try {
        const results = await query(queryAllCharacters)

        res.status(200).json(results)
    }catch (e){
        console.log(e);
        res.status(500).json({error:"Internal Error"})
    }

}


module.exports = {
    getAllCharacters
}