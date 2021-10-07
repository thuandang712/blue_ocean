const express = require('express')
const router = express.Router()

// let User = require('../schema/user.schema')

router.get('/', (req, res) => {
    res.json({ message: "Ticket get route works!!!" })
})

module.exports = router