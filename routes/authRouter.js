const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

router.post('/register', async (req, res, next) => {
    try{
        const { email, password } = req.body
        if(!email || !password) res.send("NOT HAPPYYYYYYYY")
        const userExists = await User.findOne({email})
        if (!userExists) {
            const hashedPassword = bcrypt.hash(password, 10)
            const newUser = new User({email, hashedPassword})
            const savedUser = await newUser.save()
        }
    }catch(error){

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