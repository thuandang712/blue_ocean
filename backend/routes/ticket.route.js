const express = require('express')
const { route } = require('./user.route')
const router = express.Router()

// let User = require('../schema/user.schema')

router.get('/', (req, res) => {
    res.json({ message: "Ticket get route works!!!" })
})


router.post('/', (req, res) => {
    res.json({ message: "Create a ticket" })
})



module.exports = router