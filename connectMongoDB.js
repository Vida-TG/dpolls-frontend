const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Successfully connected to Database")
    })
    .catch((err) => {
        console.log(err.message)
    })
