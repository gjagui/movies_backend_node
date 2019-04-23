let router = require('express').Router();
let { allComments, createComment, commentsByTitle } = require('../controllers/commentsController');

router.get('/all', async function(req,res) {
    try {
        let comments = await allComments();
        res.json(comments); 
    }
    catch (error) {
        console.log(error);
    } 
});

router.post('/create', async function(req,res) {
    try {
        let { title, username, comment, score} = req.body;
        let created = await createComment(title, username, comment, score);
        res.json(created);
    }
    catch (error) {
        console.log(error);    
    }
});

router.get('/find/:title', async function(req, res) {
    try {
        let comment = await commentsByTitle(req.params.title);
        res.json(comment);
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;