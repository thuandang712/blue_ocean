const express = require('express')
const { route } = require('./user.route')
const router = express.Router()

const { ticketSchema } = require('../schema/ticket.schema')
const { userAuth } = require('../helpers/auth')

router.get('/', userAuth, (req, res) => {

    res.json({ message: "Ticket get route works!!!" })
})


router.post('/', userAuth, async (req, res) => {
    try {
        const { subject, sender, message } = req.body
        const userID = req.userID
        const ticketObj = {
            clientID: userID,
            subject,
            conversations: [
                {
                    sender,
                    message
                }
            ]
        }

        await ticketSchema(ticketObj).save()
        // console.log(result)
        res.status(201).json({ message: 'Ticket created successfully!' })


    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})


module.exports = router