let express = require('express');
let router = express.Router();
let f = require('../modules/films');

router.get('/', function(req, res, next) {
	res.render('list', { title: 'Watch Me - List of Films', moves: f.getListOfMoves()});
});

router.post('/rewrite', function(req, res, next) {
	f.change(req.body.move);
	res.send("");
});

module.exports = router;