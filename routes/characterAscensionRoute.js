const {Router} = require('express');
const {getCharacterAscensionMaterials} = require("../controllers/characterAscensionController");
const router = Router();


router.get('/', getCharacterAscensionMaterials)


module.exports = router