const jwt = require('jsonwebtoken');
const { setJWT, getJWT } = require('./redis')
const { userSchema } = require('../schema/user.schema')

const createAccessJWT = async (email, _id) => {
    const accessJWT = jwt.sign(
        { email },
        process.env.JWT_ACCESS_KEY,
        { expiresIn: '15m' }
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

module.exports = {
    createAccessJWT,
    createRefreshJWT
}