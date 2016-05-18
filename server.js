// Http is used to create Server to take up the requests
var http = require('http');

// Express act as a routing Engine 
var express = require('express');

var bodyParser = require('body-parser')

// Used as a templating engine
var vash = require('vash');

// Express is initialized to carry ot routing process
var app = express();

app.set("view engine", "vash");

app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'));

// Body parser shall allow user to post a form data to the server 
//Values shall be available as a part of "req.body.name"

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var controller = require("./controller");

controller.init(app);

var data = require("./data");

// This is the middleware used for error handeling
// ** This should be used only when all routes has been attached to "app"
// ** If done before that the middleware is not attached to the routes.

app.use(function(err, req, res, next) {
  res.send('That an Error');
});

data.runCursor();
 
// Server is created and express is used as a middleware to configure the routes
var server = http.createServer(app);

// Apllication is made to listen Http request at port 3000
app.listen(3000);
