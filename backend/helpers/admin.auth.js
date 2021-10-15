const { verifyAccessJWT } = require('./jwt')
const { getJWT, deleteJWT } = require('./redis')


const adminAuth = async (req, res, next) => {
    const { authorization } = req.headers
    const adminJWT = authorization.replace('Bearer ', '') // using postman


    // verify if jwt is valid
    const decoded = await verifyAccessJWT(adminJWT)


    if (decoded.email) {
        // check if jwt exists in redis
        const adminID = await getJWT(adminJWT)

        if (!adminID) {
            return res.status(403).json({ message: "Forbidden" })
        }

        req.adminID = adminID
        return next()
    }

    deleteJWT(adminJWT)

    return res.status(403).json({ message: "Forbidden" })
}

module.exports = {
    adminAuth
}
