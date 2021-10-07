const jwt = require('jsonwebtoken');
const { setJWT, getJWT } = require('./redis')
const { userSchema } = require('../schema/user.schema')

const createAccessJWT = async (email, _id) => {
    const accessJWT = await jwt.sign(
        { email },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '30m' } // change back to 15m after debugging
    );

    setJWT(accessJWT, _id)

    return accessJWT

}


const createRefreshJWT = async (email, _id) => {
    const refreshJWT = jwt.sign(
        { email },
        process.env.JWT_REFRESH_KEY,
        { expiresIn: '30d' }
    );

    // store refresh JWT in mongoDB
    await userSchema.findOneAndUpdate(
        { _id },
        {
            $set: {
                "refreshJWT.token": refreshJWT,
                "refreshJWT.createdAt": Date.now()
            }
        },
        { new: true }
    )

    return refreshJWT
}

const verifyAccessJWT = userJWT => {
    try {
        return Promise.resolve(jwt.verify(userJWT, process.env.JWT_ACCESS_KEY));
    } catch (error) {
        return Promise.resolve(error)
    }
}


module.exports = {
    createAccessJWT,
    createRefreshJWT,
    verifyAccessJWT
}