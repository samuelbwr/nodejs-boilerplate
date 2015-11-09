var mongoose = require("../config/db");

var schema = new mongoose.Schema({
    text : String,
    createdAt : Date,
    done: Boolean
});



var Task = mongoose.model('Task', schema);

Task.getAll = function(req, res, callback) {
    Task.find({}, function(err, tasks) {
        //if(err) 
        callback(tasks);
        
    }); 
}


module.exports = Task;

