const getAllCharacters = "SELECT characters.id, characters.name, characters.rank, weapon_types.name AS weapon_type," +
    " genders.name AS gender, locations.name AS location, elements.name AS element, characters.\"avatarURL\" as" +
    " avatarURL\n" +
    "FROM characters\n" +
    "LEFT JOIN weapon_types ON weapon_types.id = characters.weapon_type_id\n" +
    "LEFT JOIN genders ON genders.id = characters.gender_id\n" +
    "LEFT JOIN locations ON locations.id = characters.location_id\n" +
    "LEFT JOIN elements ON elements.id = characters.element_id;"

const ascencionMaterials = (values) =>  "SELECT character_ascension_requirements.id," +
    " character_ascension_requirements.level, characters.name AS character_name, items.name AS item_name, character_ascension_requirements.amount\n" +
    "FROM character_ascension_requirements\n" +
    "LEFT JOIN characters ON characters.id = character_ascension_requirements.character_id\n" +
    "LEFT JOIN items ON items.id = character_ascension_requirements.item_id\n" +
    `WHERE characters.id IN (${values})`


module.exports = {
    getAllCharacters,
    ascencionMaterials
}