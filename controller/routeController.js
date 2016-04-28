(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})



  // Application shall allow user to make a get request 
  // If parameter sent is 'Mayank', we shall throw an error
  // Error shall be handled by the Middleware added using 'app.use' in server file

  app.get('/:name', function(req, res, next) {
   if(req.params.name == "Mayank") {
     return next(new Error('Please Chhose Correct Value'));
   }
     console.log("Param: " + req.params.name)
     res.render('layout', {});
  })
  

		app.get('/index/index.vash', function(req, res) {
		  res.render('index/index.vash', {});
		});

  app.post('/actionForm', function(req, res) {
    var name = req.body.name;
    console.log("My Parameters are: " + req.body.name)
    res.render('layout', {});
  });

	};

})(module.exports)