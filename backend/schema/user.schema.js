const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    first_name: { type: String, maxLength: 20, required: true },
    last_name: { type: String, maxLength: 20, required: true },
    phone_number: { type: Number, maxLength: 11 },
    email: { type: String, maxLength: 50, required: true },
    password: { type: String, minLength: 8, maxLength: 20, required: true },
});

module.exports = {
    userSchema: model('User', userSchema)
};