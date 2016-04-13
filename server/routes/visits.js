'use strict';

var visit = function(){};

//dependencies
var visit_services;
var PATH = '/visits';

visit.route = function(server,session){

	server.get( PATH, function(req,res,next){
		var visit_service = new visit_services();
				
		visit_service.getAllVisits(function(err,result){
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
		var visit_service = new visit_services();
			visit_service.id = req.params.id;
			visit_service.getVisitById(function(err,result){
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

	server.get(PATH+'/byThisProspect/:id', function(req,res,next){
		var visit_service = new visit_services();
			visit_service.prospect_id = req.params.id;
			visit_service.getVisitsByProspectId(function(err,result){
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

module.exports = function(_visit_services){
	visit_services = _visit_services;
	return visit;
}