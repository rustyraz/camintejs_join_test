'use strict';

var user = function(){};

//dependencies
var user_services;

user.route = function(server,session){

	server.get('/users', function(req,res,next){
		var service = new user_services();
				
		service.getAllUsers(function(err,result){
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

module.exports = function(_user_services){
	user_services = _user_services;
	return user;
}