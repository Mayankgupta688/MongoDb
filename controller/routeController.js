(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/index/index.vash', function(req, res) {
		  res.render('index/index.vash', {});
		});
	};

})(module.exports)