'use strict';

function get_user_schema(schema){
	var user = schema.define('users',{
		id : { type : schema.String, limit : 18 },
		org_id : { type: schema.String, limit : 18 },
		email : { type: schema.String }
	},{
		primaryKeys : ['id']
	});
	return user;
}

module.exports = function(_db){	
	var user_schema = get_user_schema(_db);	
	return user_schema;
}