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
        const { subject, description, status, assignee, priority, type } = req.body

        const ticketObj = {
            subject,
            description,
            status,
            assignee,
            priority,
            type
        }

        await ticketSchema(ticketObj).save()
        res.status(201).json({ status: "success", message: 'Ticket created successfully!' })

    } catch (error) {
        console.log(error)
        // check duplicate email and send message to front end
        if (error.message.includes("validation failed")) {
            message = "Please fill out all the required fields";
        }

        res.json({ status: "error", message })
    }
})


// update status of ticket to working
router.patch('/:_id/status/inprogress', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { status: 'In progress' },
            { new: true }
        )

        if (result._id) {
            return res.status(200).json({ status: "success", message: "Ticket status updated successfully to In Progress", result });
        }

        res.json({ status: 'error', message: 'Unable to update status' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})

// update status of ticket to done
router.patch('/:_id/status/resolved', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { status: 'Resolved' },
            { new: true }
        )

        if (result._id) {
            return res.status(200).json({ status: "success", message: "Ticket status updated successfully to Resolved", result });
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
        const { subject, description, status, assignee, priority, type } = req.body

        const result = await ticketSchema.findOneAndUpdate(
            { _id },
            { subject, description, status, assignee, priority, type },
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