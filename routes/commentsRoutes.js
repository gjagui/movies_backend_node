let router = require('express').Router();
let {allComments, commentsByTitle} = require('../controllers/commentsController');

router.get('/all', function(req,res) { 
    res.json(allComments());
});

router.get('/find/:title', function(req, res) {
    res.json(commentsByTitle(req.params.title));
});

module.exports = router;