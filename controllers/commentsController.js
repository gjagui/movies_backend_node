let Comments = require("../models/Comments");

async function allComments() {
    let comments = await Comments.find({});
    return comments;
};

async function createComment(title, username, comment, score) {
    let new_comment = Comments({ title, username, comment, score });
    await new_comment.save();
    return { title, username, comment, score };
}

async function commentsByTitle(title) {
    let comments = await Comments.find({title});
    let total_score = 0;
    let votes = 0;
        
    comments.forEach(comment => {
        total_score += comment.score;
        votes++;
    });

    let rating = (votes) ? Math.round(total_score/votes) : null;

    return {rating, votes, comments};
};

module.exports =  {allComments, createComment, commentsByTitle};