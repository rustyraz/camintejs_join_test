'use strict';
var activity = function(){
	this.id;
};

//dependecies
var activity_schema;

activity.prototype.getAllActivities = function(callback){
	var Query = activity_schema.find();
		Query.run({}, function(err,activities){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,activities);
			}
		});
}

module.exports = function(_schema){
	activity_schema = _schema;	
	return activity;
};