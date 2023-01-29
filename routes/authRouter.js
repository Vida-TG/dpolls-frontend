
        const userExists = await User.findOne({email})
        if (!userExists) {
            const hashedPassword = (await bcrypt.hash(password, 10)).toString()
            const newUser = new User({email, password:hashedPassword})
            const savedUser = await newUser.save()

            const accessT =  await signAccessToken(savedUser.id)
            res.json(accessT)
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