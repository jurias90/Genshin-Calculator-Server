const {query} = require('../database/postGresSql')
const {queryAllCharacters} = require('../database/queries')
const getCharacter = async (req,res)=> {

}

const getAllCharacters = async (req,res) =>{
    console.log(req.query)
    try {
        const results = await query(queryAllCharacters)

        res.status(200).json(results)
    }catch (e){
        console.log(e);
        res.status(500).json({error:"Internal Error"})
    }

}


module.exports = {
    getCharacter,
    getAllCharacters
}