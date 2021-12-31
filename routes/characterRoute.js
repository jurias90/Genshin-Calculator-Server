const {Router} = require('express')
const {getAllCharacters} = require('../controllers/characterController')
const router = Router();


router.get("/", getAllCharacters)

router.use('/ascensions', require('./characterAscensionRoute'))

router.all('/', async (req, res) =>
    res.status(404).send("Route not found"));


module.exports = router