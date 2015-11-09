var mongoose = require('mongoose');
 
var mongoIP = process.env.IP || 'localhost';

var mongoPort = 27017;

var mongoDb = "test";
 
mongoose.connect('mongodb://'+mongoIP+':'+mongoPort+'/'+mongoDb);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
    console.log("The connection was successfully created!");
});

// db.close();

module.exports = mongoose;
