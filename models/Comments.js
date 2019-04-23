let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let commentsSchema = new Schema({
    title:      { type: String, required: true, unique: true },
    username:   { type: String, required: true},
    comment:    { type: String, required: true },
    score:      { type: Number, required: true }
});

let Comment = mongoose.model('Comment', commentsSchema);  

module.exports = Comment;