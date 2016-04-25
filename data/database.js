(function(database) {

	var mongodb = require('mongodb');
	var mongoUrl = "mongodb://user:a110cate@ds013848.mlab.com:13848/medical";
	var theDb = null;

	database.getDb = function(next) {
		if (theDb) {
			next(null, theDb)
		}
		else {
			mongodb.MongoClient.connect(mongoUrl, function(err, db) {
				if(err) {
					next(err, null)
				}
				else {
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
