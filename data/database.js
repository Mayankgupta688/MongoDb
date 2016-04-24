(function(database) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://localhost:27017/Employee";
	var theDb = null;

	database.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					console.log('Connection Failed')
					next(err, null)
				}
				else {
					console.log('Connection Established')
					theDb = {
						db: db, 
						employeeDetails: db.collection('employeeDetails')
					};
					next(null, theDb)
				}
			})
		}
	}

})(module.exports);
