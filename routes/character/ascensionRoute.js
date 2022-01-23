const {Router} = require('express');
const {ascensionMaterials} = require("../../controllers/character/ascensionController");
const router = Router();


router.post('/', ascensionMaterials)

router.all('/', async (req, res) =>
    res.status(404).json({error:"Route not found"}));


module.exports = router