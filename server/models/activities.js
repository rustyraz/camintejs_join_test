'use strict';

function get_activity_schema(schema){
	var activity = schema.define('activity',{
		id : { type : schema.Number },
		visit_id : { type: schema.Number },
		page_number : { type: schema.Number },
		duration : { type : schema.Float },
		activity_event : { type : schema.String },
		version_id : { type : schema.String },
		date_time : { type: schema.Date },
		new_link_id : { type : schema.String }		
	},{
		primaryKeys : ['id']
	});
	return activity;
}

module.exports = function(_db){	
	var activity_schema = get_activity_schema(_db);	
	return activity_schema;
}