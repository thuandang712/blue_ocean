const { verifyAccessJWT } = require('./jwt')
const { getJWT, deleteJWT } = require('./redis')


const adminAuth = async (req, res, next) => {
    const { authorization } = req.headers
    const userJWT = authorization.replace('Bearer ', '') // using postman



    // 1. verify if jwt is valid
    const decoded = await verifyAccessJWT(userJWT)
    console.log(decoded)

    if (decoded.email === 'admin@gmail.com') {
        // 2. check if jwt exists in redis
        const userID = await getJWT(userJWT)

        if (!userID) {
            return res.status(403).json({ message: "Forbidden" })
        }

        req.userID = userID
        return next()
    }

    deleteJWT(userJWT)

    return res.status(403).json({ message: "Forbidden" })
}

module.exports = {
    adminAuth
}
