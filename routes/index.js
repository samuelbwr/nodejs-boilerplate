var fs = require('fs'),
    seo = JSON.parse(fs.readFileSync(__dirname + '/seo.json')),
    Task = require("../models/task");



exports.router = {
    index: function(req, res, next) {
        Task.getAll(req,res, function(tasks){
            res.render('index' ,{ seo : seo , tasks: tasks});    
        });
        
    },
    about: function(req, res) {
        res.render('about', { seo : seo });
    },
    contact: function(req, res){ 
        res.render('contact', { seo : seo });
    }
};
