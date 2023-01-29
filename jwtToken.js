const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken: (userID) => {
        return new Promise((resolve, reject) => {
            const payload = {
                name: "Human"
            }
            const secret = "jfjwjojjbsrgtehtoken4fi4f"
            const options = {
                expiresIn: '1h',
                issuer: 'www.package.com',
                audience: userID,
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
    }
}