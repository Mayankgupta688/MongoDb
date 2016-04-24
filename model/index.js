(function(schema) {

	var mongoose = require('mongoose');

	var schema = mongoose.Schema;

	var employeeSchema = new schema({
		name: {
			first: String,
			last: String
		},
		notes: String,
		created: {type: Date, default: Date.Now}
	});

	employeeSchema.add({
		salary: Number
	});

	var Employee = mongoose.model('Employee', employeeSchema)

	var Mayank = new Employee({
		name: {
			first: 'Mayank',
			last: 'Gupta'
		},
		notes: 'This is a simple Model',
		salary: 100000
	});

	console.log('Data Added to the database');

	Mayank.save();

	console.log('Data Saved');


})(module.exports);