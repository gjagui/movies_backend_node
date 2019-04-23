let persistencia = require("../persistence/db");
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    email:String,
    password:Number,
});

let User = mongoose.model('User', userSchema);

module.exports = User;