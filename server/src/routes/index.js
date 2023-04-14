const express = require('express')
const router = express.Router();

const { getCharacterById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');


router.get('/character/:id', getCharacterById)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)


module.exports = {
    router,
}