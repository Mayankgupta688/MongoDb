(function(dataSearch) {

	var database = require('./database');

	dataSearch.addData = function() {
		database.getDb(function(err, db) {
			if (err) {
				console.log("Databse Connection Failed");
			} else {
				db.employeeDetails.insert({Name: 'Mayank', Salary: 1000000, Age: 27}, function(err) {
					if(err) {
						console.log("Data Insertion Failed")
					}
				});
			}
		});
	};

	dataSearch.findData = function() {
		database.getDb(function(err, db) {
			if (err) {
				console.log("Database Connection Failed");
			} else {
				db.employeeDetails.find().toArray(function(err, results) {
					if (err) {
						console.log('Data Fetching Faiuled');
					} else {
						console.log(results);
						console.log('Result Count: ' + results.length);
					}
				})	
			}
		});
	};

})(module.exports);