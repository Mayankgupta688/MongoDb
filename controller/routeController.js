(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

  app.get('/:name', function(req, res, next) {
   if(req.params.name == "Mayank") {
     console.log("Wrong Param 'Mayank' ")
     return next(new Error('Please Chhose Correct Value'));
   }
     console.log("Param: " + req.params.name)
     res.render('layout', {});
  })
  

		app.get('/index/index.vash', function(req, res) {
		  res.render('index/index.vash', {});
		});
	};

})(module.exports)