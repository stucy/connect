const jwt = require('jsonwebtoken');
const User = require('../models/User');

// check if authenticated and inject the user into the request
const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err){
                res.status(401);
            }else{
                const user = await User.findById(decodedToken.id);
                req.user = user;
                next();
            }
        });
    }else{
        res.status(401);
    }
}

module.exports = { 
    requireAuth
}