const express = require('express')
const coffeeControl = require('./controllers/coffeecontroller')

const port = process.env.PORT || 4000
const app = express()


//// Middleware ////

app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})