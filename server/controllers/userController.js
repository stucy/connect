// imports
const User = require('../models/User');
const bcrypt = require('bcrypt');

// handle errors
const handleErrors = err => {
    const errors = {};

    if(err.message === 'User has blocked you'){
        errors.invite = err.message;
        return errors;
    }

    if(err.message === 'User not found!'){
        errors.invite = err.message;
        return errors;
    }

    if(err.message === 'Wrong password!'){
        errors.oldPass = err.message;
        return errors;
    }

    if(err.errors){
        //Check for invalid data errors
        for(const [key, value] of Object.entries(err.errors)){
            errors[key] = value.properties.message;
        }
    }
   
    return errors;
}

// update user data
const update_settings = async (req, res) => {
    const user = req.user;

    console.log(req.body);
    
    try{
        await User.findByIdAndUpdate(user._id, { settings: { ...req.body }}, { new: true})
        res.status(200).json({status: 'success'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({status: 'error'});
    }
}

// change password
const change_password = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = req.user;

    try{
        // check if passwords match
        const auth = await bcrypt.compare(oldPassword, user.password);

        if(!auth) throw Error('Wrong password!');

        // set the new password for the user
        user.password = newPassword;

        // validate the new password
        await user.validate();

        // save the new password
        await user.save();

        //return response
        res.status(200).json({status: "success"});
    }
    catch(err){
        const error = handleErrors(err);
        res.status(400).json({error});
    }
}

const save_avatar = async (req, res) => {
    let { image } = req.body;
    const user = req.user;
    const fs = require('fs');

    //file name
    let filename = user.username;

    //unique key for file
    const unique = Date.now();

    var data = image.replace(/^data:image\/\w+;base64,/, '');

    try{

        fs.writeFile(`./public/avatars/${filename}-${unique}.png`, data, {encoding: 'base64'}, 
            async function(err){
                if(err){
                    console.log(err);
                }
                else{
                    if(user.avatar != 'default.png') 
                        fs.unlink(`./public/avatars/${user.avatar}`, (err) => {
                            if(err) console.log(err)
                        });

                    user.avatar = `${filename}-${unique}.png`;
                    await User.findByIdAndUpdate(user._id, { avatar: user.avatar})

                    res.status(200).json({success: true, file: user.avatar});
                }
            }
        );
    }
    catch(err){
        const error = handleErrors(err);
        res.status(400).json({error});
    }

    
}

// send friend request
const send_invite = async (req, res) => {
    const { username } = req.body;
    const user = req.user;

    try{
        // get user by username
        const user2 = await User.findOne({ username: username});

        // check if user exists
        if(!user2) throw Error('User not found!');

        if(user2.friends.blocked.includes(user._id)) throw Error('User has blocked you');

        // get pending array
        const pendingArr = user2.friends.pending;

        // check if invite already exists & if not push it into the array
        if(!pendingArr.includes(user._id)) pendingArr.push(user._id);

        // update the user document
        await User.findByIdAndUpdate(user2.id, {friends: { pending: pendingArr } }, {new: true});

        // return response
        res.status(200).json({status: "success"});
    }
    catch(err){
        const error = handleErrors(err);
        res.status(400).json({error});
    }
}

// accepts friend request
const accept_invite = async (req, res) => {
    const { id } = req.body;
    const user = req.user;

    try{
        // find the user that sent the invite
        const user2 = await User.findById(id);

        // get his user array
        const pendingArr = user.friends.pending;

        // get index of the id
        const index = pendingArr.indexOf(id);

        // if it exists remove it
        if(index > -1) pendingArr.splice(index, 1);

        // get the friends array
        const friendsArr = user.friends.accepted;

        // check if the id is in the array & if not push it in the array
        if(!friendsArr.includes(id)) friendsArr.push(id);

        // update the document of the user
        await User.findByIdAndUpdate(user._id, 
            {friends: { pending: pendingArr, accepted: friendsArr } }, {new: true});

        // get the friend array of the sender
        const friendArr2 = user2.friends.accepted;

        // check if the users id is in the array & if not push it in the array
        if(!friendArr2.includes(user._id)) friendArr2.push(user._id);

        // update sender document
        await User.findByIdAndUpdate(id, {friends: { accepted: friendArr2 } }, {new: true})

        // return response
        res.status(200).json({status: 'success'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({status: 'error'});
    }
}

// block user from sending requests or messaging you
const block_user = async (req, res) => {
    const { id } = req.body;
    const user = req.user;

    try{
        // get all arrays
        const blockedArr = user.friends.blocked;
        const friendArr = user.friends.accepted;
        const pendingArr = user.friends.pending;

        // check if already blocked if not push into array
        if(!blockedArr.includes(id)) blockedArr.push(id);

        // get index in friend array
        let index = friendArr.indexOf(id);

        // if exists remove it
        if(index > -1) friendArr.splice(index, 1);

        // get index in pending array
        index = pendingArr.indexOf(id);

        // if exists remove it
        if(index > -1) pendingArr.splice(index, 1);

        // update user document
        await User.findByIdAndUpdate(user._id,
            {friends: { pending: pendingArr, accepted: friendArr, blocked: blockedArr }}, { new: true})

        res.status(200).json({status: 'success'});

    }
    catch(err){
        console.log(err);
        res.status(500).json({status: 'error'});
    }
}

// block user from sending requests or messaging you
const unblock_user = async (req, res) => {
    const { id } = req.body;
    const user = req.user;

    try{
        // get all arrays
        const blockedArr = user.friends.blocked;

        // get index in blocked array
        let index = blockedArr.indexOf(id);

        // if exists remove it
        if(index > -1) blockedArr.splice(index, 1);

        // update user document
        await User.findByIdAndUpdate(user._id,
            {friends: { blocked: blockedArr }}, { new: true})

        res.status(200).json({status: 'success'});

    }
    catch(err){
        console.log(err);
        res.status(500).json({status: 'error'});
    }
}

// removes friend from friend list
const remove_friend = async (req, res) => {
    const { id } = req.body;
    const user = req.user;

    try{
        // get user by id
        const user2 = await User.findById(id);

        // get pending array
        const friendArr = user2.friends.accepted;

        // get index of userId
        let index = friendArr.indexOf(id);

        // if it exists in the array remove it
        if(index > -1) friendArr.splice(index, 1);

        // update the document of the friend
        await User.findByIdAndUpdate(id, {friends: { pending: friendArr } }, {new: true});

        const friendArr2 = user.friends.accepted; 

        index = friendArr2.indexOf(id);

        // if it exists in the array remove it
        if(index > -1) friendArr2.splice(index, 1);

        // update the document of the user
        await User.findByIdAndUpdate(user._id, {friends: { pending: friendArr2 } }, {new: true});

        // return response
        res.status(200).json({status: "success"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({status: 'error'});
    }
}

// gets data from one of the friend arrays
const friends_data = async (req, res) => {

    // gets the current user
    const user = req.user;

    // gets the request data
    const { offset, type } = req.body;

    try{
        // gets the username and id of all users in the selected friend array with offset and limit
        const users = await User.find({_id: user.friends[type] }).skip(offset).limit(10)
        .select('username _id').exec();

        // returns a response
        res.status(200).json(users);
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    update_settings,
    change_password,
    save_avatar,
    send_invite,
    accept_invite,
    block_user,
    unblock_user,
    remove_friend,
    friends_data
}