require('dotenv').config();
const express = require('express');
const app = express()
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 4001;

// MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet({
    contentSecurityPolicy: (process.env.NODE_ENV === 'prod'),
}));
app.use(express.static('public'));
app.use(cors());

// ROUTES
app.use('/characters', require('./routes/character/characterRoute'))

app.all('/', async (req, res) =>
    res.status(404).json({error:"Route not found"}));


// LISTENING
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});