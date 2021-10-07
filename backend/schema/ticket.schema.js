const { model, Schema } = require('mongoose')

const ticketSchema = new Schema({
    content: { type: String, maxLength: 200, required: true },
    status: { type: Number, maxLength: 5 }
})

module.exports = {
    ticketSchema: model('Ticket', ticketSchema)
}