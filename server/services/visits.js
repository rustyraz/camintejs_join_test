'use strict';
var visit = function(){
	this.id;
	this.prospect_id;
};

//dependecies
var visit_schema;
var allTables;

visit.prototype.getAllVisits = function(callback){
	var Query = visit_schema.find();
		Query.run({}, function(err,visits){
			if(!!err){
				callback(err,null);
			}else{
				callback(null,visits);
			}
		});
}

visit.prototype.getVisitById = function(callback){
	var Query = visit_schema.findById(this.id, function(err, visits){
	   if(!!err){
	   		console.log(err);
			callback(err,null);
		}else{
			callback(null,visits);
		}
	});
}

visit.prototype.getVisitsByProspectId = function(callback){	

	var Query = allTables.visit.find();
		Query.where('prospect_id', this.prospect_id);
		Query.run({},function(err,result){
			if(!!err){
		   		console.log(err);
				callback(err,null);
			}else{
				callback(null,result);
			}
		});
}

module.exports = function(_schema,_other_dependencies){
	visit_schema = _schema;	
	allTables= _other_dependencies.allTables;
	return visit;
};