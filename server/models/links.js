'use strict';

function get_link_schema(schema){
	var link = schema.define('links',{
		id : { type : schema.String },
		parent_link_id : { type: schema.String },
		is_active : { type: schema.Integer },
		created_by : { type : schema.String },
		summary : { type : schema.Text },
		link_title : { type: schema.String }	
	},{
		primaryKeys : ['id']
	});
	return link;
}

module.exports = function(_db){	
	var link_schema = get_link_schema(_db);	
	return link_schema;
}