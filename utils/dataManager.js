/**
 * CharacterLibrary will sort all the data received from the database into an object organized for each character
 * and levels.
 * @param materials  Raw data from the database.
 * @returns {{}} Object returned is a sorted library with all of the materials for each character and level,
 */
const characterLibrary = (materials) => {
    let library = {};
    let names = getUniqueField(materials, "character_name")
    names.forEach(name=>{
        library[name] = getMaterialsForCharacter(materials.filter(item=> item.character_name === name))
    })
    return library
}

/**
 * GetUniqueField creates an array of all the specific unique fields.
 * @param {Array<Object>} materials
 * @param {string} fieldName
 * @returns {*[any]} array of given field name.
 */

const getUniqueField = (materials, fieldName) =>{
    let names = [];

    materials.forEach((material)=>{
        if(!names.includes(material[fieldName])){
            names.push(material[fieldName])
        }
    })

    return names;
}

const getMaterialsForCharacter = (characterMats) =>{
    let materials = [];

    for(let i =1; i <= 6; i++){
        // noinspection EqualityComparisonWithCoercionJS
        materials.push({
            level:i,
            materials: getMaterialsPerLevel(characterMats.filter(item=> item.level == i))
        })
    }

    return materials
}

const getMaterialsPerLevel = (levelMats) =>{
    let materials = {};

    levelMats.forEach(material =>{
        materials[material.item_name] = material.amount
    })

    return materials
}

module.exports = { characterLibrary, getUniqueField}