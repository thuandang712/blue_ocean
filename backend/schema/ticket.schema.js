const { model, Schema } = require('mongoose');

const ticketSchema = new Schema({

    subject: { type: String, maxLength: 100, required: true, default: '' },
    status: { type: String, maxLength: 20, required: true, default: 'Pending' },
    sender: { type: String, maxLength: 50, required: true },
    message: { type: String, maxLength: 1000, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },

    tech: {
        type: Schema.Types.ObjectId,
        ref: 'Tech'
    }

    // conversations: [
    //     {
    //         sender: { type: String, maxLength: 50, required: true },
    //         message: { type: String, maxLength: 1000, required: true },
    //         createdAt: { type: Date, required: true, default: Date.now() },
    //     }
    // ]

});

module.exports = {
    ticketSchema: model('Ticket', ticketSchema)
};
