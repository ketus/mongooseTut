/**
 * Created by ketus on 12/20/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseSchema = new Schema({

	memberName: String,
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
	createdOn: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Customers', mongooseSchema);