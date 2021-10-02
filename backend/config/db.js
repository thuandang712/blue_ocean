const mongoose = require("mongoose")
// const config = require("config")
// const db = config.get("mongoURI")

// use dotenv to fix security issue
require('dotenv').config()
const db = process.env.mongoURI || 'mongodb+srv://thuandang123:thuandang123@blue-ocean.x1fl8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// Create db connection function USING ASYNC AWAIT
const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true })
        console.log('MongoDB Connected...')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

// USING Promise
// const connectDB = () => {
//     // Use the mongoose connect function and pass in DB we want to connect.
//     mongoose.connect(db, {
//         useNewUrlParser: true,
//     })
//         .then(() => console.log('Working'))
//         .catch((err) => {
//             console.error(err.message)
//             // exit w/ failure
//             process.exit(1)
//         })
// }


module.exports = connectDB