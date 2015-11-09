var mongoose = require('mongoose');
 
var mongoIP = process.env.IP || 'localhost';
var mongoPort = 27017;
var mongoDb = "test";
 
mongoose.connect('mongodb://'+mongoIP+':'+mongoPort+'/'+mongoDb);

module.exports = mongoose;
