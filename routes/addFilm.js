var express = require('express');
var router = express.Router();
let f = require('../modules/films');

router.get('/', function(req, res, next) {
	res.render('add', { title: 'Watch Me - Add Film' });
});

router.post('/', function(req, res, next) {
	f.addFilm(req.body.move);
	res.send("");
});

module.exports = router;