'use strict';

var activity = function(){};

//dependencies
var activity_services;

activity.route = function(server,session){

	server.get('/activities', function(req,res,next){
		var service = new activity_services();
				
		service.getAllActivities(function(err,result){
			if(!!err){
				res.send({
					error : err
				});
				return next();
			}else{
				res.send({
					success : true,
					data : result
				});
				return next();
			}
		});
	});
}

module.exports = function(_activity_services){
	activity_services = _activity_services;
	return activity;
}