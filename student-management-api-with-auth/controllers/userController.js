const users = require('../data/users')

const getProfile = async (req, res) => {
    const user = users.find(user => user.id === req.user.id)
    if (!user) return res.status(404).json({message: "No user found"})
    const {password, ...userSent} = user
    
    res.status(200).send(userSent)
}

const getAllUSers = (req, res) => {
    
    const userS = users.map(({password, ...userSent}) => userSent)

    res.status(200).send(userS)
}

module.exports = {
    getAllUSers,
    getProfile
}