'use strict';

/*
id	int(11) UN AI PK
link_id	varchar(18)
prospect_id	int(11)
visit_date	timestamp
visitor_ip	varchar(15)
link_is_shared	tinyint(1)
shared_link_id	varchar(18)
*/

function get_visit_schema(schema){
	var visit = schema.define('visits',{
		id : { type : schema.Number },
		link_id : { type: schema.String },
		prospect_id : { type: schema.Number },
		visit_date : { type : schema.Date },
		visitor_ip : { type : schema.String },
		link_is_shared : { type : schema.Integer },
		shared_link_id : { type: schema.String }	
	},{
		primaryKeys : ['id']
	});
	return visit;
}

module.exports = function(_db){	
	var activity_schema = get_visit_schema(_db);	
	return activity_schema;
}