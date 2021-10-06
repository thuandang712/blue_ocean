const { verifyAccessJWT } = require('./jwt')
const { getJWT } = require('./redis')


const userAuth = async (req, res, next) => {
    const { authorization } = req.headers
    const jwt = authorization.replace('Bearer ', '')
    console.log(jwt)

    // 1. verify if jwt is valid
    const decoded = await verifyAccessJWT(jwt)
    console.log(decoded)

    if (decoded.email) {

        // const userID = await getJWT(jwt)
        // console.log(userID)
    }
    // 2. check if jwt exists in redis
    // 3. extract user id
    // 4. get user profile based on user id 


    next()
}

module.exports = {
    userAuth
}
