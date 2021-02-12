// imports
const User = require('../models/User');

// handle errors
const handleErrors = err => {
    const errors = {};

    //Check for unique value errors
    if(err.code === 11000){
        errors[Object.keys(err.keyPattern)[0]] = `"${Object.values(err.keyValue)[0]}" is already taken!`;
        return errors;
    }

    //Check for invalid data errors
    for(const [key, value] of Object.entries(err.errors)){
        errors[key] = value.properties.message;
    }
    
    return errors;
}

// handles signup logic
const signup_post = async (req, res) => {
    // get request data
    const {email, password, username } = req.body;

    try{
        // try to create the user
        const user = await User.create({username, email, password});

        // return succesful responce
        res.status(201).json(user);
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json(errors);
    }
}

// handles login logic
const login_post = async (req, res) => {

}

module.exports = {
    signup_post,
    login_post
}