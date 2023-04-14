const user = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;
    if (email == user[0].email && password == user[0].password) {
        return res.status(200).json({ access: true })
    }
    res.status(200).json({ access: false })
}

module.exports = {
    login,
}
