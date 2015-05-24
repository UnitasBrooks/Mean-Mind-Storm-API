var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CommandSchema = new Schema({
	issued: {
		type: Date,
		default: Date.now
	},
	command: {
		type: String,
		default: ''
	}
});

mongoose.model('Command', CommandSchema);