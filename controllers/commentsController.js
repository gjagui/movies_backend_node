let Comments = require("../models/Comments");

async function allComments() {
    let comments = await Comments.find({});
    return comments;
};

async function createComment(title, username, comment, score) {
    let comment = Comments({ title, username, comment, score });
    await user.save();
    return { created: true, title, username, comment, score };
}

async function commentsByTitle(title) {
    let comments = await Comments.findOne({title});
    return comments;
};

module.exports =  {allComments, createComment, commentsByTitle};