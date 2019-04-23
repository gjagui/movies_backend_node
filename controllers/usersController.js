let Users   = require("../models/Users");
let bcrypt  = require('bcryptjs');
let salt    = bcrypt.genSaltSync(10);

async function allUsers(req, res) {
    let users = await Users.find({});
    return users;
};

async function createUser(username, password) {
    let password_hash = bcrypt.hashSync(password, salt);
    let user = Users({username: username, password: password_hash});
    await user.save();
    return {created: true, username: username};    
};

async function logInUser(username, password) {;
    let user = await Users.findOne({username: username});
    return {logInStatus: bcrypt.compareSync(password, user.password)}; 
};

module.exports =  {allUsers, createUser, logInUser};