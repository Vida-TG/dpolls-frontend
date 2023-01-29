const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken: (userID) => {
        return new Promise((resolve, reject) => {
            const payload = {
                name: "Human ing"
            }
            const secret = "jfjwjojjbsrgteewgewtauthtoken4fi4f"
            const options = {
                expiresIn: '1d',
                issuer: 'https://package.com',
                audience: userID,
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
    }
}