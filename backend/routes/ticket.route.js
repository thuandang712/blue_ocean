const express = require('express')
const router = express.Router()

const { ticketSchema } = require('../schema/ticket.schema')
const { adminAuth } = require('../helpers/admin.auth')


// get all ticket info
router.get('/', adminAuth, async (req, res) => {
    try {
        const ticket = await ticketSchema.find()
        res.status(200).json({ status: "success", ticket })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})


// get one ticket details
router.get('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const ticket = await ticketSchema.findOne({ _id })
        res.status(200).json({ status: "success", ticket })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



// create a ticket
router.post('/', adminAuth, async (req, res) => {
    try {
        const { subject, sender, message } = req.body

        const ticketObj = {
            subject,
            sender,
            message
        }

        await ticketSchema(ticketObj).save()
        res.status(201).json({ status: "success", message: 'Ticket created successfully!' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})


// update status of ticket to working
router.patch('/:_id/status/working', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { status: 'Working' },
            { new: true }
        )

        if (result._id) {
            return res.status(200).json({ status: "success", message: "Ticket status updated successfully to working", result });
        }

        res.json({ status: 'error', message: 'Unable to update status' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})

// update status of ticket to done
router.patch('/:_id/status/done', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { status: 'Done' },
            { new: true }
        )

        if (result._id) {
            return res.status(200).json({ status: "success", message: "Ticket status updated successfully to done", result });
        }

        res.json({ status: 'error', message: 'Unable to update status' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



// update ticket details
router.patch('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const { subject, sender, message } = req.body

        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { subject, sender, message },
            { new: true }
        )

        res.status(200).json({ status: "success", message: "Ticket updated successfully", result });

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



// delete a tech 
router.delete('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        await ticketSchema.findOneAndDelete({ _id })
        res.status(200).json({ status: "success", message: "Ticket has been deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



module.exports = router