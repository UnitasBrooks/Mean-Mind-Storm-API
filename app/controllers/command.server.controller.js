'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	Command = mongoose.model('Command');

exports.getAll = function (req,res) {
	Command.find().exec(function(err, commands) {
		if (err) {
			return res.status(400).send({
				message: 'failure!'
			});
		} else {
			res.json(commands);
		}
	});
};