const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

// connect to mongoDB
const connectDB = require('./config/db')
connectDB()


// middle wares
app.use(express.json())
app.use(cors())


// routes
app.use('/api/user', require('./routes/user.route'))
app.use('/api/ticket', require('./routes/ticket.route'))


// error handler
// unknown http reqs
app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" })
    next()
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: err.message });
})


// listen on port
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})