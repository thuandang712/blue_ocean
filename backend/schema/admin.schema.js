const { model, Schema } = require('mongoose');

const adminSchema = new Schema({
    email: { type: String, maxLength: 50, required: true, unique: true },
    password: { type: String, minLength: 8, maxLength: 100, required: true },
    refreshJWT: {
        token: {
            type: String, default: ''
        },
        createdAt: {
            type: Date, required: true, default: Date.now()
        }
    }
});

module.exports = {
    adminSchema: model('Admin', adminSchema)
};