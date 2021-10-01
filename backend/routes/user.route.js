const express = require('express')
const router = express.Router()

const { userSchema } = require('../schema/user.schema')

router.get('/', async (req, res) => {
    try {
        const result = await userSchema.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


router.post('/', async (req, res) => {
    try {
        const result = await userSchema(req.body).save()
        res.status(201).json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


module.exports = router