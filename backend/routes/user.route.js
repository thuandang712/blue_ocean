const express = require('express')
const router = express.Router()

const { userSchema } = require('../schema/user.schema')

// jwt helper
const { createAccessJWT, createRefreshJWT } = require('../helpers/jwt')

// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get('/', async (req, res) => {
    try {
        const result = await userSchema.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


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



module.exports = router