const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token
    if(authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if(err) {
                return res.status(403).json("token is invalid!")
            }
            req.user = user
            next()
        })
    } else {
        return res.status(401).json("you are not authenticated!")
    }
}

const verifyTokenAuth = (req,res,next) => {
    verifyToken(req,res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("you don't have the authority to perform this action.")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("you don't have the authority to perform this action.")
        }
    })
}

module.exports ={verifyToken,verifyTokenAuth,verifyTokenAndAdmin}