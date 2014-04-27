#! /usr/bin/env node

'use strict';

var express = require('express');
var http = require('http');
var app = module.exports = express();
var server = http.createServer(app);
var logger = require('morgan');
var config = require('config');

require('./sockets')(server, config);

app.set('env', config.env);
app.set('port', config.port);
app.use(express.static(config.staticBase));
app.use(logger(config.loggerOptions));

if (!module.parent) {
  var port = app.get('port');
  server.listen(port, function() {
    console.log('Server listening on port', port);
  });
}
