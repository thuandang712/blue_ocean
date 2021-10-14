const express = require('express')
const router = express.Router()

const { adminSchema } = require('../schema/admin.schema')

// jwt helper
const { createAccessJWT, createRefreshJWT } = require('../helpers/jwt')
const { deleteJWT } = require('../helpers/redis')

// bcrypt
const { hashPassword, comparePassword } = require('../helpers/bcrypt')

// admin authorization
const { adminAuth } = require('../helpers/admin.auth')



// get all user if log in authorized
router.get('/', adminAuth, async (req, res) => {
    try {
        // check if admin is authorized using middleware adminAuth
        // extract adminID
        const _id = req.adminID

        // get admin profile
        const adminProfile = await adminSchema.findOne({ _id })
        res.status(200).json(adminProfile)

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})

// create admin
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const hashedpw = await hashPassword(password)

        const adminObj = {
            email,
            password: hashedpw
        }

        await adminSchema(adminObj).save()
        res.status(201).json({ message: 'Admin created successfully!' })

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


// admin sign in route
router.post('/login', async (req, res) => {
    const { email, password } = req.body // this will be plain text pw

    // data validation check 
    if (!email || !password) {
        return res.status(400).json({ message: "Invalid request" })
    }


    // get email and check if it exists in DB
    try {
        const admin = await adminSchema.findOne({ email })


        // get hashed pw from db
        const hashedPwFromDb = admin && admin._id && admin.email ? admin.password : null

        if (hashedPwFromDb === null) {
            return res.json({ status: "error", message: "Invalid Email or Password!" })
        }

        // compare plain text and hashed pw
        const match = await comparePassword(password, hashedPwFromDb)

        if (!match) {
            return res.json({ status: "error", message: "Invalid Email or Password!" })
        }

        // if matches, create jwt, login authorized
        const accessJWT = await createAccessJWT(admin.email, `${admin._id}`) // expecting email and id
        const refreshJWT = await createRefreshJWT(admin.email, `${admin._id}`) // expecting email and id

        res.status(200).json({
            status: "success",
            message: "Admin Login successfully",
            accessJWT,
            refreshJWT
        })

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


// user logout route, invalidate jwt
router.delete('/logout', adminAuth, async (req, res) => {
    try {
        const { authorization } = req.headers
        const adminJWT = authorization.replace('Bearer ', '')
        deleteJWT(adminJWT)

        const _id = req.adminID

        // delete refresh jwt from mongo db
        const result = await adminSchema.findOneAndUpdate(
            { _id },
            {
                $set: {
                    "refreshJWT.token": '',
                    "refreshJWT.createdAt": Date.now()
                }
            },
            { new: true }
        )

        if (result._id) {
            return res.json({ status: "success", message: "Log out successfully" });
        }

        res.json({ status: "error", message: "Unable to log out..." })

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


module.exports = router