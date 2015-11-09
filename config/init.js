#!/usr/bin/env node
var cluster = require('cluster'),
    numCPUs = require('os').cpus().length,
    app,
    server;

if (cluster.isMaster && !module.parent) {
    for (var i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
      console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    app = require('./server.js');

    server = app.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function () {
        var host = server.address().address,
            port = server.address().port;

        console.log('App listening at http://%s:%s with worker id %s', host, port, cluster.worker.id);
    });

    module.exports = app;
}
