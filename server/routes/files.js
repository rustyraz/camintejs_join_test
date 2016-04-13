'use strict';

var file = function(){};

//dependencies
var file_services;
var PATH = '/files';

file.route = function(server,session){

	server.get( PATH, function(req,res,next){
		var file_service = new file_services();
				
		file_service.getAllFiles(function(err,result){
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
		var file_service = new file_services();
			file_service.id = req.params.id;
			file_service.getFileById(function(err,result){
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

module.exports = function(_file_services){
	file_services = _file_services;
	return file;
}