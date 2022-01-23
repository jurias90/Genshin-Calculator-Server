const {Router} = require('express')
const {allCharacters} = require('../../controllers/character/characterController')
const router = Router();


router.get("/", allCharacters)


router.use('/ascensions', require('./ascensionRoute'))

router.all('/', async (req, res) =>
    res.status(404).json({error:"Route not found"}));


module.exports = router