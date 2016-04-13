'use strict';

var link = function(){};

//dependencies
var link_services;
var PATH = '/links';

link.route = function(server,session){

	server.get( PATH, function(req,res,next){
		var link_service = new link_services();
				
		link_service.getAllLinks(function(err,result){
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

	server.get(PATH+'/:id',function(req,res,next){
		var link_service = new link_services();
			link_service.id = req.params.id;
			link_service.getLinkById(function(err,result){
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

module.exports = function(_link_services){
	link_services = _link_services;
	return link;
}