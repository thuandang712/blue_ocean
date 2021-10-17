const { model, Schema } = require('mongoose');

const techSchema = new Schema({
    first_name: { type: String, maxLength: 20, required: true },
    last_name: { type: String, maxLength: 20, required: true },
    phone_number: { type: Number, maxLength: 11 },
    email: { type: String, maxLength: 50, required: true, unique: true },


    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    ]

});

module.exports = {
    techSchema: model('Tech', techSchema)
};