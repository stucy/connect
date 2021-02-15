// imports
const  jwt = require('jsonwebtoken');
const User = require('../models/User');

// handle errors
const handleErrors = err => {
    const errors = {};

    // error login
    if (err.message === 'Incorrect email or password!'){
        errors.login = err.message;
        return errors;
    }

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

// 1 week in seconds
const maxAge = 7 * 24 * 60 * 60;

const createToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: maxAge})
}

// handles signup logic
const signup_post = async (req, res) => {
    // get request data
    const {email, password, username } = req.body;

    try{
        // try to create the user
        const user = await User.create({username, email, password});

        // create jwt
        const token = createToken(user._id);

        // set cookie for the response
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })

        // create response object
        const resObj = {
            id: user._id,
            username: user.username,
            friends: user.friends,
            settings: user.settings
        };

        // return succesful responce
        res.status(201).json(resObj);
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

// handles login logic
const login_post = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);

        // create jwt
        const token = createToken(user._id);

        // set cookie for the response
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })

        // create response object
        const resObj = {
            id: user._id,
            username: user.username,
            friends: user.friends,
            settings: user.settings
        };

        // return succesful responce
        res.status(200).json(resObj);
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

// handles logout logic
const logout_post = (req, res) => {
    // set cookie so it dies instantly
    res.cookie('jwt', '', { maxAge: 1 })
    res.status(204);
}

module.exports = {
    signup_post,
    login_post,
    logout_post
}