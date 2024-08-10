const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 8080

app.use(cors())

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.use('/files', express.static('html'))
app.use('/images', express.static('images'))

const Routes = require('./Routes/Routes');
app.use('/', Routes)

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`MongoDB Database is live...!`))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))