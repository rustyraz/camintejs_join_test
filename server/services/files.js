'use strict';
var file = function(){
	this.id;
};

//dependecies
var file_schema;

file.prototype.getAllFiles = function(callback){
	var Query = file_schema.find();
		Query.run({}, function(err,files){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,files);
			}
		});
}

file.prototype.getFileById = function(callback){

	var Query = file_schema.find();
		Query.where('id', this.id);
		Query.run({},function(err,files){
			if(!!err){
		   		console.log(err);
				callback(err,null);
			}else{
				callback(null,files);
			}
		});	
}

module.exports = function(_schema){
	file_schema = _schema;	
	return file;
};