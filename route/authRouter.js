const express = require('express')
const router = express.Router()

router.post('/register', async (req, res, next) => {
    res.send("REGISTER")
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