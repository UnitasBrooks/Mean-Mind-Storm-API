'use strict';
module.exports = function(app) {
	var command = require('../../app/controllers/command.server.controller');

	app.route('/command/all').get(command.getAll);
};
