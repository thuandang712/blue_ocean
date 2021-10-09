const express = require('express')
const router = express.Router()

const { techSchema } = require('../schema/tech.schema')
const { adminAuth } = require('../helpers/admin.auth')


// get all tech if log in authorized
router.get('/', adminAuth, async (req, res) => {
    try {
        const tech = await techSchema.find()
        res.status(200).json({ status: "success", tech })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})


// get one tech details
router.get('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const tech = await techSchema.findOne({ _id })
        res.status(200).json({ status: "success", tech })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



// create a tech
router.post('/', adminAuth, async (req, res) => {
    try {
        const { first_name, last_name, phone_number, email } = req.body

        const techObj = {
            first_name,
            last_name,
            phone_number,
            email
        }

        await techSchema(techObj).save()
        res.status(201).json({ status: "success", message: 'Tech created successfully!' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})


// update status of tech to unavailable
router.patch('/:_id/status/unavailable', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const result = await techSchema.findOneAndUpdate(
            { _id },
            { status: 'Unavailable' },
            { new: true }
        )

        if (result._id) {
            return res.status(200).json({ status: "success", message: "Tech status updated successfully", result });
        }

        res.json({ status: 'error', message: 'Unable to update status' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})


// update tech details
router.patch('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        const { first_name, last_name, phone_number, email } = req.body

        const result = await techSchema.findOneAndUpdate(
            { _id },
            { first_name, last_name, phone_number, email },
            { new: true }
        )

        res.status(200).json({ status: "success", message: "Tech updated successfully", result });

    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



// delete a tech 
router.delete('/:_id', adminAuth, async (req, res) => {
    try {
        const { _id } = req.params
        await techSchema.findOneAndDelete({ _id })
        res.status(200).json({ status: "success", message: "Tech has been deleted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: error.message })
    }
})



module.exports = router