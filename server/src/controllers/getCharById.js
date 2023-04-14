const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios')


// const getCharacterById = (req, res) => {
//     const { id } = req.params;
//     axios(`${URL}/${id}`)
//         .then((character) => {
//             res.status(200).json(character.data)
//         })
//         .catch((error) => {
//             res.status(500).send('Not fount ' + error.message)
//         })
// }

async function getCharacterById (req, res) {
    const { id } = req.params;
    try {
        const character = await axios(`${URL}/${id}`);
        return res.status(200).json(character.data);
    }
    catch (error) {
        return res.status(500).send('Not fount ' + error.message);
    }
}

module.exports = {
    getCharacterById,
};