let express = require('express');
let router = express.Router();
let f = require('../modules/films');

router.get('/', function(req, res, next) {
  res.render('watch', { title: 'Watch Me - Watch' });
});

router.get('/generate', function(req, res, next) {
	let move = f.generateMove();
	res.send({ move: move });
});


module.exports = router;