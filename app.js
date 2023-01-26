const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()


const authRoutes = require('./routes/authRouter')
require('./connectMongoDB')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

app.get('/', (req, res, next) => {
    console.log("Homepage");
    next()
})

app.use('/auth', authRoutes)