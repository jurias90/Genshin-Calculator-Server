const {Router} = require('express');
const {getCharacterAscensionMaterials} = require("../controllers/characterAscensionController");
const router = Router();


router.post('/', getCharacterAscensionMaterials)


module.exports = router