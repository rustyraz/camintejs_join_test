'use strict';

var home = function(){};

home.route = function(server,session){
	server.get('/',function(req,res,next){
		res.send("HOME PAGE");
		return next();
	});
};

module.exports = function(){
	return home;
};