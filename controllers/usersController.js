let Users   = require("../models/Users");
let bcrypt  = require('bcryptjs');
let salt    = bcrypt.genSaltSync(10);

async function allUsers(req, res) {
    let users = await Users.find({});
    return users;
};

async function createUser(username, userpass) {
    let password = bcrypt.hashSync(userpass, salt);
    let user = Users({username, password});
    await user.save();
    return { username };
};

async function logInUser(username, password) {;
    let user = await Users.findOne({username});
    return { User: bcrypt.compareSync(password, user.password) }; 
};

module.exports =  {allUsers, createUser, logInUser};