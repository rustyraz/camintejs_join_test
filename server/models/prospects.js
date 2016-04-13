'use strict';
/*
Columns:
id	int(11) UN AI PK
first_name	varchar(100)
last_name	varchar(100)
company	varchar(100)
email	varchar(255)
created_date	timestamp
created_by	char(18)
crm_id	varchar(18)
*/

function get_prospect_schema(schema){
	var prospect = schema.define('prospects',{
		id : { type : schema.Integer },
		first_name : { type: schema.String },
		last_name : { type: schema.String },
		company : { type: schema.String },
		email : { type : schema.String },
		created_by : { type : schema.String },
		crm_id : { type : schema.String },
		created_date : { type: schema.Date }
	},{
		primaryKeys : ['id']
	});

	return prospect;
}

module.exports = function(_db){	
	var prospect_schema = get_prospect_schema(_db);	
	return prospect_schema;
}