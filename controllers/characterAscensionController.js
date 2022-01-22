const {query} = require('../database/postgres')
const {characterAscencionMaterials} = require('../database/queries')

const getCharacterAscensionMaterials = async ( req,res)=>{
    try {
        if(!req.body.ids){
            res.status(400).json({error:"Bad Request. ID's missing"})
        }
        const results = await query(characterAscencionMaterials(valueTemplateConstructor(req.body.ids))  , req.body.ids)
        res.status(200).json(results?.rows ? { data: sortMaterials(results.rows)} : {data:[]})
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

const sortMaterials = (array) => {
    let materials = {};
    let names = getNames(array)
    names.forEach(name=>{
        materials[name] = getMaterialsForCharacter(array.filter(item=> item.character_name === name))
    })
    return materials
}

const getNames = (array) =>{
    let names = [];

    array.forEach((item)=>{
        if(!names.includes(item.character_name)){
            names.push(item.character_name)
        }
    })

    return names;
}

const getMaterialsForCharacter = (array) =>{
    let materials = [];

    for(let i =1; i <= 6; i++){
        materials.push({
            level:i,
            materials: getMaterialsPerLevel(array.filter(item=> item.level == i))
        })
    }

    return materials
}

const getMaterialsPerLevel = (array) =>{
    let materials = {};

    array.forEach(material =>{
        materials[material.item_name] = material.amount
    })

    return materials
}

module.exports = {
    getCharacterAscensionMaterials
}