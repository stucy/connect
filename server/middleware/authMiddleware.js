const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) =>{

    // get jwt cookie if it exists
    const token = req.cookies.jwt;

    // check jwt exist & is verified
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err){
                //to do
            }else{
                next();
            }
        })
    }else{
        //to do
    }
}

module.exports = { requireAuth };