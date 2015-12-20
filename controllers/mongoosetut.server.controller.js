/**
 * Created by ketus on 12/20/15.
 */
var Ctrl = require('../models/mongoosetut.server.model.js');

exports.create = function (req, res) {
	var entry = new Ctrl({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment

	});

	entry.save();

	res.redirect(301, '/');

};


exports.getNote = function (req, res) {
	res.render('newnote', {title: 'Mongoose - New Note'});
};