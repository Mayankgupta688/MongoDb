(function(dataFile) {

	var database = require('./database');

	database.getDb(function(err, db) {
		if (err) {
			console.log("Databse Connection Failed");
		} else {
			console.log('Database:' + db);
			db.employeeDetails.insert({Name: 'Mayank', Salary: 1000000, Age: 27}, function(err) {
				if(err) {
					console.log("Data Insertion Failed")
				}
			});
		}
	})

})(module.export);