const {query} = require('../database/postgres')
const {queryCharacterAscencionMaterials} = require('../database/queries')

const getCharacterAscensionMaterials = async ( req,res)=>{
    try {
        const results = await query(queryCharacterAscencionMaterials)
        res.status(200).json(results)
    }catch (e){
        console.log(e);
        res.status(500).json({error:"Internal Error"})
    }
}

module.exports = {
    getCharacterAscensionMaterials
}