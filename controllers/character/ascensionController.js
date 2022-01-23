const {ascencionQuery} = require('../../database/postgres')
const { characterLibrary } = require('../../utils/dataManager')


const ascensionMaterials = async (req, res)=>{
    try {
        if(!req.body.ids || !req.body.ids.length > 0){
            res.status(400).json({error:"ID's missing"})
        }
        const mats = await ascencionQuery(req.body.ids)
        res.status(200).json(mats?.rows ? { data: characterLibrary(mats.rows)} : {data:[]})
    }catch (e){
        res.status(500).json({error:"Internal Error"})
    }
}


module.exports = {
     ascensionMaterials
}