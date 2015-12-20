var express = require('express');
var router = express.Router();
var mongooseCtrl = require('../controllers/mongoosetut.server.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//get new note page
router.get('/newnote', function (req, res) {
	return mongooseCtrl.getNote(req, res);
});

//post new note page
router.post('/newnote', function (req, res) {
	return mongooseCtrl.create(req, res);
});


module.exports = router;
