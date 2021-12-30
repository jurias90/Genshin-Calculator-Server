const queryAllCharacters = "SELECT characters.id, characters.name, characters.rank, weapon_types.name AS weapon_type," +
    " genders.name AS gender, locations.name AS location, elements.name AS element\n" +
    "FROM characters\n" +
    "LEFT JOIN weapon_types ON weapon_types.id = characters.weapon_type_id\n" +
    "LEFT JOIN genders ON genders.id = characters.gender_id\n" +
    "LEFT JOIN locations ON locations.id = characters.location_id\n" +
    "LEFT JOIN elements ON elements.id = characters.element_id;"

module.exports = {
    queryAllCharacters
}