'use strict';

var prospect = function(){};

//dependencies
var prospect_services;
var PATH = '/prospects';

prospect.route = function(server,session){

	server.get( PATH, function(req,res,next){
		var prospect_service = new prospect_services();
				
		prospect_service.getAllProspects(function(err,result){
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
		var prospect_service = new prospect_services();
			prospect_service.id = req.params.id;
			prospect_service.getProspectById(function(err,result){
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

module.exports = function(_prospect_services){
	prospect_services = _prospect_services;
	return prospect;
}