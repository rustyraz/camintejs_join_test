'use strict';
var link = function(){
	this.id;
};

//dependecies
var link_schema;

link.prototype.getAllLinks = function(callback){
	var Query = link_schema.find();
		Query.run({}, function(err,links){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,links);
			}
		});
}

link.prototype.getLinkById = function(callback){
	var Query = link_schema.find();
		Query.where('id', this.id);
		Query.run({},function(err,links){
			if(!!err){
		   		console.log(err);
				callback(err,null);
			}else{
				callback(null,links);
			}
		});	
}

module.exports = function(_schema){
	link_schema = _schema;	
	return link;
};