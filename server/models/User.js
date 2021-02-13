const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

// creating schema for user collection
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username!"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter an email!"],
        lowercase: true,
        unique: true,
        validate: [ isEmail, "Please enter a valid email!"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password!"],
        minlength: [6, "Minimum password length is 6 characters!"]
    },
    friends: {
        accepted: {
            type: Array,
            default: [],
        },
        pending: {
            type: Array,
            default: [],
        },
        blocked: {
            type: Array,
            default: [],
        }
    },
    settings: {
        darkMode: {
            type: Boolean,
            default: true
        },
        activeStatus: {
            type: Boolean,
            default: true
        },
        notifications: {
            type: Boolean,
            default: true
        }
    }
}, {timestamps: true});

// hash password before we save the user into the databse
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// creating user model
const User = mongoose.model('User', userSchema);

module.exports = User;