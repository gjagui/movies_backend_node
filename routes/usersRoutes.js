let router = require('express').Router();
let {createUser, logInUser} = require('../controllers/usersController');

router.get('/all', function(req,res) { 
    res.json(allMovies());
});

router.get('/find/{title}', function(req, res) {
    res.json(findMovie(req.body.title));
});

module.exports = router;