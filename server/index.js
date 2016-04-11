var restify = require('restify');
var session = require("restify-session")({
	debug : true
});
var CookieParser = require('restify-cookies');

var server = restify.createServer();
	server.use(CookieParser.parse);
	server.use(session.sessionManager);
	server.use(restify.queryParser());
	server.use(restify.bodyParser());

//IMPORT THE DB SETTINGS
var schema = require('../config/database.js')();

//DEFINE THE MODELS
//user models
var user_schema = require('./models/users.js')(schema);

//get the services
var user_services = require('./services/users.js')(user_schema);

//import the routes
var home = require('./routes/home.js')();
var users = require('./routes/users.js')(user_services);

//INITIATE THE ROUTES
users.route(server,session);
home.route(server,session);

server.listen(4040, function() {
	console.log('%s listening at %s', server.name, server.url);
});