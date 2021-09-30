const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'get route works' })
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})