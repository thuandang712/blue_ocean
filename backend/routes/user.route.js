const express = require('express')
const router = express.Router()

const { userSchema } = require('../schema/user.schema')

// jwt helper
const { createAccessJWT, createRefreshJWT } = require('../helpers/jwt')
const { deleteJWT } = require('../helpers/redis')

const { userAuth } = require('../helpers/auth')

// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// get all user if log in authorized
router.get('/', userAuth, async (req, res) => {
    try {
        // 1.2. check if user is authorized using middleware userAuth
        // 3. extract user id
        const _id = req.userID
        const userProfile = await userSchema.findOne({ _id: _id })
        // 4. get user profile based on user id 
        res.status(200).json({ user: userProfile })

        // all user info will be available in this private route?
        // const result = await userSchema.find()
        // res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})

// create a user
router.post('/', async (req, res) => {
    const { first_name, last_name, phone_number, email, password } = req.body


    try {
        const hashedpw = await bcrypt.hash(password, saltRounds)

        const newUserObj = {
            first_name,
            last_name,
            phone_number,
            email,
            password: hashedpw
        }

        await userSchema(newUserObj).save()
        res.status(201).json({ message: 'User created successfully!' })
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


// user sign in route
router.post('/login', async (req, res) => {
    const { email, password } = req.body // this will be plain text pw

    // data validation check 
    if (!email || !password) {
        return res.status(400).json({ message: "Invalid request" })
    }


    // get email and check if it exists in DB
    try {
        const user = await userSchema.findOne({ email: email })

        // get hashed pw from db
        const hashedPwFromDb = user && user._id ? user.password : null
        if (hashedPwFromDb === null) {
            return res.status(404).json({ message: "Invalid Email or Password!" })
        }

        // compare plain text and hashed pw
        const match = await bcrypt.compare(password, hashedPwFromDb)
        if (!match) {
            return res.status(404).json({ message: "Invalid Email or Password!" })
        }

        // if matches, create jwt, login authorized
        const accessJWT = await createAccessJWT(user.email, `${user._id}`) // expecting email and id
        const refreshJWT = await createRefreshJWT(user.email, `${user._id}`) // expecting email and id

        res.status(200).json({
            message: "Login successfully",
            accessJWT,
            refreshJWT
        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }


})


// user logout route, invalidate jwt
router.delete('/logout', userAuth, async (req, res) => {
    try {
        const { authorization } = req.headers
        const userJWT = authorization.replace('Bearer ', '')
        const _id = req.userID
        deleteJWT(userJWT)

        // delete refresh jwt from mongo db
        await userSchema.findOneAndUpdate(
            { _id },
            {
                $set: {
                    "refreshJWT.token": '',
                    "refreshJWT.createdAt": Date.now()
                }
            },
            { new: true }
        )

        res.json({ message: "Log out successfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


module.exports = router