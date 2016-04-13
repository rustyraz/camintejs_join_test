'use strict';
var prospect = function(){
	this.id;
};

//dependecies
var prospect_schema;

prospect.prototype.getAllProspects = function(callback){
	var Query = prospect_schema.find();
		Query.run({}, function(err,prospects){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,prospects);
			}
		});
}

prospect.prototype.getProspectById = function(callback){
	var prospect_id = this.id;
	var Query = prospect_schema.find();
		Query.where('id', this.id);
		Query.run({},function(err,prospect){
			if(!!err){
		   		console.log(err);
				callback(err,null);
			}else{
				callback(null,prospect);
			}
		});	
}

module.exports = function(_schema){
	prospect_schema = _schema;	
	return prospect;
};