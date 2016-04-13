'use strict';
/*

Columns:
id	varchar(32) PK
filename	varchar(255)
title	varchar(255)
type	varchar(40)
short_summary	text
created_date	timestamp
created_by	varchar(18)*/

function get_file_schema(schema){
	var file = schema.define('files',{
		id : { type : schema.String },
		filename : { type: schema.String },
		title : { type: schema.String },
		type : { type : schema.String },
		short_summary : { type : schema.Text },
		created_by : { type : schema.String },
		summary : { type : schema.Text },
		link_title : { type: schema.String }	
	},{
		primaryKeys : ['id']
	});
	return file;
}

module.exports = function(_db){	
	var file_schema = get_file_schema(_db);	
	return file_schema;
}