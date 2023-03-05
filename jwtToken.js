const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken: (userID) => {
        return new Promise((resolve, reject) => {
            const payload = {
                name: "Human"
            }
            const secret = "ghnumu jigugunurr  fgryfbfhfjfdrhdjjtttttfbee----------------------------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"
            const options = {
                expiresIn: '1h',
                issuer: 'https://www.package.com',
                audience: userID,
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if (err) reject(err)
                resolve(token)
            })
        })
    }
}