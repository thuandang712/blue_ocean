const express = require('express')
const router = express.Router()

// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { userSchema } = require('../schema/user.schema')

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

        const result = await userSchema(newUserObj).save()
        res.status(201).json({ message: 'User created successfully!' })
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


module.exports = router