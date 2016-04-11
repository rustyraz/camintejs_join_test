'use strict';
var caminte = require('caminte'),
    Schema = caminte.Schema,
    config = {
         driver     : "mysql",    // or mariadb
         host       : "localhost",
         port       : "3306",
         username   : "root",
         password   : "root",
         database   : "engage",
         pool       : true // optional for use pool directly
    };

var schema = new Schema(config.driver, config);

module.exports = function(){
	return schema;
}