const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const bcrypt = require('bcrypt')

const  { authSchema } = require('../validationSchema')
const User = require('../models/UserModel')

router.post('/register', async (req, res, next) => {
    try{
        const { email, password } = req.body
        const result = await authSchema.validateAsync({ email, password })
        
        const userExists = await User.findOne({email})
        if (!userExists) {
            const hashedPassword = (await bcrypt.hash(password, 10)).toString()
            const newUser = new User({email, password:hashedPassword})
            const savedUser = await newUser.save()
            res.json(savedUser)
        } else {
            return next(createError(404, "User exists already"))
        }
    }catch(error){
        next(createError(200, error.message))
    }
})

router.post('/login', async (req, res, next) => {
    res.send("LOGIN")
})

router.post('/refresh-token', async (req, res, next) => {
    res.send("REfresh token")
})

router.delete('/logout', async (req, res, next) => {
    res.send("LOGOUT")
})

module.exports = router