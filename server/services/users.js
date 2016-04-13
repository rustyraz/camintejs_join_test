'use strict';
var user = function(){};

//dependecies
var user_schema;

user.prototype.getAllUsers = function(callback){
	var Query = user_schema.find();
		Query.run({}, function(err,users){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,users);
			}
		});
}

module.exports = function(_schema){
	user_schema = _schema;	
	return user;
};