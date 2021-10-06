const { model, Schema } = require('mongoose');

const ticketSchema = new Schema({
    clientID: { type: Schema.Types.ObjectId },
    subject: { type: String, maxLength: 100, required: true, default: '' },
    sender: { type: String, maxLength: 20, required: true },
    message: { type: String, maxLength: 300, required: true },
    status: { type: String, maxLength: 20, required: true, default: 'Pending' },
    createdAt: { type: Date, required: true, default: Date.now() },

});

module.exports = {
    ticketSchema: model('User', ticketSchema)
};