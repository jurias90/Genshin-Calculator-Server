const {query} = require('../database/postgres')
const {queryCharacterAscencionMaterials} = require('../database/queries')

const getCharacterAscensionMaterials = async ( req,res)=>{
    try {
        if(!req.body.ids){
            res.status(400).json({error:"Bad Request. ID's missing"})
        }
        const results = await query(queryCharacterAscencionMaterials(valueTemplateConstructor(req.body.ids))  , req.body.ids)
        res.status(200).json(results)
    }catch (e){
        console.log(e);
        res.status(500).json({error:"Internal Error"})
    }
}

const valueTemplateConstructor = (array) => {
    let string = ""
    for (let i = 0; i < array.length; i++) {
        string += `$${i + 1}`
        if (i >= array.length - 1) break
        string += ","
    }
    return string
}

module.exports = {
    getCharacterAscensionMaterials
}