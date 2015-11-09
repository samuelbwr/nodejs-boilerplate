var app = require("./server");
var Task = require("../models/task");

app.get("/api/tasks", function(req, res){
    
    //Return all tasks
    Task.find(function(err, tasks){
       if(err) res.send(err);
       
       err.json(tasks);
    });
    
});

app.post("/api/tasks", function(req, res){
    Task.create({
        text: req.body.text,
        done: false
    }, function(err, task){
        
        if(err) res.send(err);
        
        Task.find(function(err, tasks){
            res.json(tasks)
        });
        
    });
});

app.delete("/api/tasks/:tasd_id", function(req, res){
    Task.remove({
        _id: req.params.task_id
    }, function(err, tasks){
        
        if(err) res.send(err);
        
        Task.find(function(err, tasks){
            res.json(tasks)
        });
        
    })
})