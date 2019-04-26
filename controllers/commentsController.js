let Comments = require("../models/Comments");

async function allComments() {
    let comments = await Comments.find({}).sort({'_id': -1});
    return comments;
};

async function createComment(title, username, comment, score, imdbID) {
    let new_comment = Comments({ title, username, comment, score, imdbID });
    await new_comment.save();
    return { title, username, comment, score, imdbID };
}

async function commentsByTitle(title) {
    let comments = await Comments.find({title}).sort({'_id': -1});
    let total_score = 0;
    let votes = 0;

    comments.forEach(comment => {
        total_score += comment.score;
        votes++;
    });

    let rating = (votes) ? Math.round(total_score/votes) : null;

    return {rating, votes, comments};
};

async function commentsByImdbID(imdbID) {
    let comments = await Comments.find({imdbID}).sort({'_id': -1});
    let total_score = 0;
    let votes = 0;

    comments.forEach(comment => {
        total_score += comment.score;
        votes++;
    });

    let rating = (votes) ? Math.round(total_score/votes) : null;

    return {rating, votes, comments};
};

async function commentsByUser(username) {
    let comments = await Comments.find({username}).sort({'_id': -1});
    return comments;
}

module.exports =  {allComments, createComment, commentsByTitle, commentsByImdbID, commentsByUser};
