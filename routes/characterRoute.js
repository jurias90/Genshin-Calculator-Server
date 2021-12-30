const {Router} = require('express')
const {getCharacter, getAllCharacters} = require('../controllers/characterController')
const router = Router();


router.get("/", getAllCharacters)

// router.get("/:id", getCharacter)

router.all('/', async (req, res) =>
    res.status(404).send("Route not found"));


module.exports = router