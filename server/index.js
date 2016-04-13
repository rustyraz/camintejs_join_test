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
var prospect_schema = require('./models/prospects.js')(schema);
var file_schema = require('./models/files.js')(schema);
var link_schema = require('./models/links.js')(schema);
var visit_schema = require('./models/visits.js')(schema);
var activity_schema = require('./models/activities.js')(schema);

//model relationship 
var relationship = require('./models/relationship.js')({
	prospect : prospect_schema,
	file : file_schema,
	link : link_schema,
	visit : visit_schema,
	activity : activity_schema
});

//get the services
var user_services = require('./services/users.js')(user_schema);
var prospect_services = require('./services/prospects.js')(prospect_schema);
var file_services = require('./services/files.js')(file_schema);
var link_services = require('./services/links.js')(link_schema);
var visit_services = require('./services/visits.js')(visit_schema,{
	allTables : relationship
});
var activity_services = require('./services/activities.js')(activity_schema);


//import the routes
var home = require('./routes/home.js')();
var users = require('./routes/users.js')(user_services);
var prospects = require('./routes/prospects.js')(prospect_services);
var files = require('./routes/files.js')(file_services);
var links = require('./routes/links.js')(link_services);
var visits = require('./routes/visits.js')(visit_services);
var activities = require('./routes/activities.js')(activity_services);

//INITIATE THE ROUTES
users.route(server,session);
prospects.route(server,session);
files.route(server,session);
home.route(server,session);
links.route(server,session);
visits.route(server,session);
activities.route(server,session);


server.listen(4040, function() {
	console.log('%s listening at %s', server.name, server.url);
});